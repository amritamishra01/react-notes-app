// const express = require("express")
// const { UserModel } = require("../models/UserModel")
// const salt = 5
// const userRouter = express.Router()
// const bcrypt = require("bcrypt")
// const jwt = require("jsonwebtoken")

// userRouter.get("/", (req, res)=>{
//     res.send("All users")
// })

// userRouter.post("/register", async(req, res)=>{
//     const {name, email, password} = req.body
//     bcrypt.hash(password, salt, async function(err, hash) {
//         if(err)
//             return res.send({message: "Something went wrong", status: 0})
//         try
//         {
//             let data = await UserModel.find({email})
//             if(data.length > 0)
//             {
//                 res.send({
//                     message: "Email already exists!",
//                     status: 0
//                 })
//             }
//             else
//             {
//                 let user = new UserModel({name, email, password: hash})
//                 await user.save()
//                 res.send({
//                     message: "User created successfully",
//                     status: 1
//                 })
//             }
//         }
//         catch(error)
//         {
//             res.send({
//                 message: error.message,
//                 status: 0
//             })
//         }
//     });
// })

// userRouter.post("/login", async(req, res)=>{
//     const {email, password} = req.body
//     let option = {
//         expiresIn: "1d"
//     }
//     try
//     {
//         let data = await UserModel.find({email})
//         //console.log(data)
//         if(data.length > 0)
//         {
//             let token = jwt.sign({userID: data[0]._id}, "your_secret_key", option);
//             bcrypt.compare(password, data[0].password, function(err, result)
//             {
//                 if(err) return res.send({
//                     message: "Something went wrong: " + err,
//                     status: 0
//                 })
//                 if(result)
//                 res.send({
//                     message: "Login successful",
//                     user: data[0].name,
//                     token: token,
//                     status: 1
//                 })
//                 else
//                 res.send({
//                     message: "Incorrect password",
//                     status: 0
//                 })
//             });
//         }
//         else
//         {
//             res.send({
//                 message: "User does not exist",
//                 status: 0
//             })
//         }
//     }
//     catch(error)
//     {
//         res.send({
//             message: error.message,
//             status: 0
//         })
//     }
    
// })

// module.exports = {
//     userRouter
// }



const express = require("express");
const { UserModel } = require("../models/UserModel");
const Tenant = require("../models/Tenant"); // tenant model
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRouter = express.Router();
const salt = 5;

// ================= REGISTER ===================
userRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  bcrypt.hash(password, salt, async function (err, hash) {
    if (err)
      return res.send({ message: "Something went wrong", status: 0 });

    try {
      let existing = await UserModel.findOne({ email });
      if (existing) {
        return res.send({
          message: "Email already exists!",
          status: 0,
        });
      }

      // 👇 create a tenant for this user (or reuse one)
      const tenant = new Tenant({
        slug: email.split("@")[0], // slug = before @
        name: `${name}'s Workspace`,
      });
      await tenant.save();

      // create user linked to tenant
      let user = new UserModel({
        name,
        email,
        password: hash,
        tenantId: tenant._id, // 👈 link user to tenant
      });

      await user.save();

      res.send({
        message: "User created successfully",
        status: 1,
      });
    } catch (error) {
      res.send({
        message: error.message,
        status: 0,
      });
    }
  });
});





// ================= INVITE USER (Admin only) ===================
userRouter.post("/invite", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).send({ message: "Missing token", status: 0 });

    // verify token
    // const decoded = jwt.verify(token, "your_secret_key");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const inviter = await UserModel.findById(decoded.userID).populate("tenantId");

    if (!inviter) {
      return res.status(404).send({ message: "Inviter not found", status: 0 });
    }

    // only admins can invite
    if (inviter.role !== "Admin") {
      return res.status(403).send({ message: "Only Admins can invite users", status: 0 });
    }

    // 👉 Add logs here
    console.log("👤 Inviter:", inviter.email, "Tenant:", inviter.tenantId.slug);
    console.log("📧 Inviting:", email, "Role:", role);

    // check duplicate email
    let existing = await UserModel.findOne({ email });
    if (existing) {
      return res.status(400).send({ message: "Email already exists", status: 0 });
    }

    // hash password for invited user
    const hashed = await bcrypt.hash(password, salt);

    // create user under same tenant
    const newUser = new UserModel({
      name,
      email,
      password: hashed,
      role: role || "Member", // default role = Member
      tenantId: inviter.tenantId._id,
    });

    await newUser.save();

    res.send({
      message: "User invited successfully",
      status: 1,
      user: {
        id: newUser._id,
        email: newUser.email,
        role: newUser.role,
        tenant: inviter.tenantId.slug,
      },
    });
  } catch (error) {
    console.error("[INVITE ERROR]", error);
    res.status(500).send({ message: error.message, status: 0 });
  }
});










// ================= LOGIN ===================
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let option = { expiresIn: "1d" };

  try {
    // Fetch user + tenant info
    let user = await UserModel.findOne({ email }).populate("tenantId");
    if (!user) {
      return res.send({
        message: "User does not exist",
        status: 0,
      });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.send({
        message: "Incorrect password",
        status: 0,
      });
    }

    // 🔑 Add tenant + role into JWT
    // let token = jwt.sign(
    //   {
    //     userID: user._id,
    //     tenantId: user.tenantId?._id,
    //     role: user.role,
    //   },
    //   "your_secret_key",
    //   option
    // );
let token = jwt.sign(
  {
    userID: user._id,
    tenantId: user.tenantId?._id,
    role: user.role,
  },
  process.env.JWT_SECRET,
  option
);

    // Send full user object
    res.send({
      message: "Login successful",
      status: 1,
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
        tenant: user.tenantId
          ? {
              id: user.tenantId._id,
              slug: user.tenantId.slug,
              name: user.tenantId.name,
              plan: user.tenantId.plan,
            }
          : null,
      },
    });
  } catch (error) {
    console.error("[LOGIN ERROR]", error);
    res.send({
      message: error.message,
      status: 0,
    });
  }
});

module.exports = {
  userRouter,
};
