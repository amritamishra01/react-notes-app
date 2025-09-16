// const bcrypt = require("bcrypt")
// const jwt = require("jsonwebtoken")

// function authenticator(req, res, next){
//     const token = req.headers.authorization
//     jwt.verify(token, "your_secret_key", (err, decode)=>{
//         if(err)
//         return res.send({
//             message:  "Invalid token, please login again",
//             status: 2
//         })
//         if(decode){
//             req.body.user = decode.userID
//             next()
//         }
//         else
//         {
//             res.send({
//                 message: "Invalid token, please login again",
//                 status: 2
//             })
//         }
//     })
// }

// module.exports = {
//     authenticator
// }


// const jwt = require("jsonwebtoken");

// function authenticator(req, res, next) {
//   const token = req.headers.authorization;

//   jwt.verify(token, "your_secret_key", (err, decode) => {
//     if (err) {
//       return res.status(401).send({
//         message: "Invalid token, please login again",
//         status: 2,
//       });
//     }

//     if (decode) {
//       // Attach values from token so routes can use them
//       req.user = {
//         id: decode.userID,
//         tenantId: decode.tenantId,
//         role: decode.role,
//       };

//       next();
//     } else {
//       res.status(401).send({
//         message: "Invalid token, please login again",
//         status: 2,
//       });
//     }
//   });
// }

// module.exports = {
//   authenticator,
// };


// const jwt = require("jsonwebtoken");

// function authenticator(req, res, next) {
//   const authHeader = req.headers.authorization;

//   if (!authHeader) {
//     return res.status(401).send({ message: "No token provided", status: 2 });
//   }

//   const token = authHeader.split(" ")[1]; // ✅ remove "Bearer"

//   jwt.verify(token, "your_secret_key", (err, decode) => {
//     if (err) {
//       return res.status(401).send({
//         message: "Invalid token, please login again",
//         status: 2,
//       });
//     }

//     if (decode) {
//       req.user = {
//         id: decode.userID,
//         tenantId: decode.tenantId,
//         role: decode.role,
//       };
//       next();
//     } else {
//       res.status(401).send({
//         message: "Invalid token, please login again",
//         status: 2,
//       });
//     }
//   });
// }

// module.exports = { authenticator };







const jwt = require("jsonwebtoken");

function authenticator(req, res, next) {
  const authHeader = req.headers.authorization;

  // ✅ check if Authorization header exists and has Bearer token
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).send({ message: "No token provided", status: 2 });
  }

  const token = authHeader.split(" ")[1]; // remove "Bearer "

  // jwt.verify(token, "your_secret_key", (err, decoded) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Invalid or expired token, please login again",
        status: 2,
      });
    }

    // ✅ attach user info to req
    req.user = {
      id: decoded.userID,
      tenantId: decoded.tenantId,
      role: decoded.role,
    };

    next();
  });
}

module.exports = { authenticator };

