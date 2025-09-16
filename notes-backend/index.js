// // const express = require("express")
// // const cors = require("cors")
// // const { connection } = require("./db")
// // const { userRouter } = require("./routes/user_routes")
// // const { noteRouter } = require("./routes/note_routes")
// // require("dotenv").config()
// // const port = process.env.PORT
// // const app = express()
// // app.use(cors())
// // app.use(express.json())
// // app.use("/user", userRouter)
// // app.use("/note", noteRouter)

// // app.get("/", (req, res)=>{
// //     res.send({
// //         message: "API is working now"
// //     })
// // })

// // app.listen(port, async()=>{
// //     try
// //     {
// //         await connection
// //         console.log("DB connected")
// //     }
// //     catch(error)
// //     {
// //         console.log(error)
// //     }
// //     console.log(`Server is running on port ${port}`)
// // })







// const express = require("express");
// const cors = require("cors");
// const { connection } = require("./db");
// const { userRouter } = require("./routes/user_routes");
// const { noteRouter } = require("./routes/note_routes");
// const tenantRouter = require("./routes/tenant_routes"); // 👈 import tenant router
// require("dotenv").config();

// const port = process.env.PORT;
// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/user", userRouter);
// app.use("/note", noteRouter);
// app.use("/tenant", tenantRouter); // 👈 mount tenant routes

// app.get("/", (req, res) => {
//   res.send({
//     message: "API is working now"
//   });
// });

// app.listen(port, async () => {
//   try {
//     await connection;
//     console.log("DB connected");
//   } catch (error) {
//     console.log(error);
//   }
//   console.log(`Server is running on port ${port}`);
// });

// const express = require("express");
// const cors = require("cors");
// const { connection } = require("./db");
// const { userRouter } = require("./routes/user_routes");
// const { noteRouter } = require("./routes/note_routes");
// const tenantRouter = require("./routes/tenant_routes");
// const authRouter = require("./routes/auth"); // 👈 import auth router
// require("dotenv").config();

// const port = process.env.PORT || 5000;
// const app = express();

// app.use(cors());
// app.use(express.json());

// // Routes
// app.use("/auth", authRouter);   // 👈 mount /auth route
// app.use("/user", userRouter);
// app.use("/note", noteRouter);
// app.use("/tenant", tenantRouter);

// // Health check
// app.get("/health", (req, res) => {
//   res.json({ status: "ok" });
// });

// // Root
// app.get("/", (req, res) => {
//   res.send({ message: "API is working now" });
// });

// // Start server
// app.listen(port, async () => {
//   try {
//     await connection;
//     console.log("DB connected");
//   } catch (error) {
//     console.log(error);
//   }
//   console.log(`Server is running on port ${port}`);
// });




// const express = require("express");
// const cors = require("cors");
// const { connection } = require("./db");
// const { userRouter } = require("./routes/user_routes");
// const { noteRouter } = require("./routes/note_routes");
// const tenantRouter = require("./routes/tenant_routes");
// require("dotenv").config();

// const port = process.env.PORT || 5000;
// const app = express();

// app.use(cors());
// app.use(express.json());

// // Routes
// app.use("/user", userRouter);   // contains register + login
// app.use("/note", noteRouter);
// app.use("/tenant", tenantRouter);

// // Health check
// app.get("/health", (req, res) => {
//   res.json({ status: "ok" });
// });

// // Root
// app.get("/", (req, res) => {
//   res.send({ message: "API is working now" });
// });

// // Start server
// app.listen(port, async () => {
//   try {
//     await connection;
//     console.log("DB connected");
//   } catch (error) {
//     console.log(error);
//   }
//   console.log(`Server is running on port ${port}`);
// });


const express = require("express");
const cors = require("cors");
const { connection } = require("./db");
const { userRouter } = require("./routes/user_routes");
const { noteRouter } = require("./routes/note_routes");
const tenantRouter = require("./routes/tenant_routes");
require("dotenv").config();

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/user", userRouter);
app.use("/note", noteRouter);
app.use("/tenant", tenantRouter);

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Root
app.get("/", (req, res) => {
  res.send({ message: "API is working now" });
});

// Start server only after DB connection
connection
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(port, () => {
      console.log(`🚀 Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to MongoDB:", err);
    process.exit(1);
  });
