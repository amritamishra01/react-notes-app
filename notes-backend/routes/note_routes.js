// const express = require("express")
// const { NoteModel } = require("../models/NoteModel")
// const bcrypt = require("bcrypt")
// const jwt = require("jsonwebtoken")
// const { authenticator } = require("../middleware/auth")

// const noteRouter = express.Router()
// noteRouter.use(authenticator)

// noteRouter.get("/", async(req, res)=>{
//     let token = req.headers.authorization
//     jwt.verify(token, "your_secret_key", async(err, decode)=>{
//         try {
//             let data = await NoteModel.find({user:decode.userID})
//             res.send({
//                 data: data,
//                 message: "Successful",
//                 status: 1
//             })
//         } catch (error) {
//             res.send({
//                 message: error.message,
//                 status: 0
//             })
//         }
//     })
    
// })

// noteRouter.post("/create", async(req, res)=>{
//     try {
//         let note = new NoteModel(req.body)
//         await note.save()
//         res.send({
//             message: "Note created",
//             status: 1
//         })
//     } catch (error) {
//         res.send({
//             message: error.message,
//             status: 0
//         })
//     }
// })

// noteRouter.patch("/", async(req, res)=>{
//     let {id} = req.headers
//     try {
//         await NoteModel.findByIdAndUpdate({_id: id}, req.body)
//         res.send({
//             message: "Note updated",
//             status: 1
//         })
//     } catch (error) {
//         res.send({
//             message: error.message,
//             status: 0
//         })
//     }
// })

// noteRouter.delete("/", async(req, res)=>{
//     let {id} = req.headers
//     try {
//         await NoteModel.findByIdAndDelete({_id: id})
//         res.send({
//             message: "Note deleted",
//             status: 1
//         })
//     } catch (error) {
//         res.send({
//             message: error.message,
//             status: 0
//         })
//     }
// })

// module.exports = {
//     noteRouter
// }

// const express = require("express");
// const { NoteModel } = require("../models/NoteModel");
// const jwt = require("jsonwebtoken");
// const { authenticator } = require("../middleware/auth");
// const TenantModel = require("../models/Tenant");


// const noteRouter = express.Router();
// noteRouter.use(authenticator);

// // -------------------- GET Notes --------------------
// noteRouter.get("/", async (req, res) => {
//   let token = req.headers.authorization;

//   jwt.verify(token, "your_secret_key", async (err, decode) => {
//     if (err) {
//       console.log("❌ JWT verification failed:", err.message);
//       return res.status(401).send({ message: "Invalid token", status: 0 });
//     }

//     try {
//       console.log("✅ Fetching notes for user:", decode.userID, "Tenant:", decode.tenantId);

//       let notes = await NoteModel.find({
//         user: decode.userID,
//         tenantId: decode.tenantId,
//       });

//       res.send({
//         data: notes,
//         message: "Notes fetched successfully",
//         status: 1,
//       });
//     } catch (error) {
//       console.error("❌ Error fetching notes:", error.message);
//       res.send({ message: error.message, status: 0 });
//     }
//   });
// });

// // -------------------- CREATE Note --------------------
// noteRouter.post("/create", async (req, res) => {
//   let token = req.headers.authorization;

//   jwt.verify(token, "your_secret_key", async (err, decode) => {
//     if (err) {
//       console.log("❌ JWT verification failed:", err.message);
//       return res.status(401).send({ message: "Invalid token", status: 0 });
//     }

//     try {
//       console.log("✏️ Creating note for tenant:", decode.tenantId);

//       // Check tenant plan
//       const tenant = await TenantModel.findById(decode.tenantId);
//       const existingNotes = await NoteModel.countDocuments({ tenantId: decode.tenantId });

//       console.log(`📊 Tenant ${tenant.slug} has plan ${tenant.plan}, existing notes: ${existingNotes}`);

//       if (tenant.plan === "FREE" && existingNotes >= 3) {
//         return res.status(403).send({
//           message: "Free plan limit reached (max 3 notes). Upgrade to Pro.",
//           status: 0,
//         });
//       }

//       let note = new NoteModel({
//         ...req.body,
//         user: decode.userID,
//         tenantId: decode.tenantId,
//       });

//       await note.save();

//       res.send({
//         message: "Note created successfully",
//         status: 1,
//       });
//     } catch (error) {
//       console.error("❌ Error creating note:", error.message);
//       res.send({ message: error.message, status: 0 });
//     }
//   });
// });

// // -------------------- UPDATE Note --------------------
// noteRouter.patch("/", async (req, res) => {
//   let { id } = req.headers;
//   let token = req.headers.authorization;

//   jwt.verify(token, "your_secret_key", async (err, decode) => {
//     if (err) {
//       console.log("❌ JWT verification failed:", err.message);
//       return res.status(401).send({ message: "Invalid token", status: 0 });
//     }

//     try {
//       console.log("♻️ Updating note:", id, "for tenant:", decode.tenantId);

//       await NoteModel.findOneAndUpdate(
//         { _id: id, tenantId: decode.tenantId },
//         req.body
//       );

//       res.send({ message: "Note updated", status: 1 });
//     } catch (error) {
//       console.error("❌ Error updating note:", error.message);
//       res.send({ message: error.message, status: 0 });
//     }
//   });
// });

// // -------------------- DELETE Note --------------------
// noteRouter.delete("/", async (req, res) => {
//   let { id } = req.headers;
//   let token = req.headers.authorization;

//   jwt.verify(token, "your_secret_key", async (err, decode) => {
//     if (err) {
//       console.log("❌ JWT verification failed:", err.message);
//       return res.status(401).send({ message: "Invalid token", status: 0 });
//     }

//     try {
//       console.log("🗑️ Deleting note:", id, "for tenant:", decode.tenantId);

//       await NoteModel.findOneAndDelete({ _id: id, tenantId: decode.tenantId });

//       res.send({ message: "Note deleted", status: 1 });
//     } catch (error) {
//       console.error("❌ Error deleting note:", error.message);
//       res.send({ message: error.message, status: 0 });
//     }
//   });
// });

// module.exports = { noteRouter };



// const express = require("express");
// const { NoteModel } = require("../models/NoteModel");
// const jwt = require("jsonwebtoken");
// const { authenticator } = require("../middleware/auth");
// const TenantModel = require("../models/Tenant");

// const noteRouter = express.Router();
// noteRouter.use(authenticator);

// // -------------------- GET Notes --------------------
// noteRouter.get("/", async (req, res) => {
//   let token = req.headers.authorization?.split(" ")[1]; // extract after Bearer

//   jwt.verify(token, "your_secret_key", async (err, decode) => {
//     if (err) {
//       console.log("❌ JWT verification failed:", err.message);
//       return res.status(401).send({ message: "Invalid token", status: 0 });
//     }

//     try {
//       console.log("✅ Fetching notes for user:", decode.userID, "Tenant:", decode.tenantId);

//       let notes = await NoteModel.find({
//         user: decode.userID,
//         tenantId: decode.tenantId,
//       });

//       res.send({
//         data: notes,
//         message: "Notes fetched successfully",
//         status: 1,
//       });
//     } catch (error) {
//       console.error("❌ Error fetching notes:", error.message);
//       res.send({ message: error.message, status: 0 });
//     }
//   });
// });

// // -------------------- CREATE Note --------------------
// noteRouter.post("/create", async (req, res) => {
//   let token = req.headers.authorization?.split(" ")[1];

//   jwt.verify(token, "your_secret_key", async (err, decode) => {
//     if (err) {
//       console.log("❌ JWT verification failed:", err.message);
//       return res.status(401).send({ message: "Invalid token", status: 0 });
//     }

//     try {
//       console.log("✏️ Creating note for tenant:", decode.tenantId);

//       // Check tenant plan
//       const tenant = await TenantModel.findById(decode.tenantId);
//       const existingNotes = await NoteModel.countDocuments({ tenantId: decode.tenantId });

//       console.log(`📊 Tenant ${tenant.slug} has plan ${tenant.plan}, existing notes: ${existingNotes}`);

//       if (tenant.plan === "FREE" && existingNotes >= 3) {
//         return res.status(403).send({
//           message: "Free plan limit reached (max 3 notes). Upgrade to Pro.",
//           status: 0,
//         });
//       }

//       let note = new NoteModel({
//         ...req.body,
//         user: decode.userID,
//         tenantId: decode.tenantId,
//       });

//       await note.save();

//       res.send({
//         message: "Note created successfully",
//         status: 1,
//       });
//     } catch (error) {
//       console.error("❌ Error creating note:", error.message);
//       res.send({ message: error.message, status: 0 });
//     }
//   });
// });

// // -------------------- UPDATE Note --------------------
// noteRouter.patch("/:id", async (req, res) => {
//   const { id } = req.params;
//   let token = req.headers.authorization?.split(" ")[1];

//   jwt.verify(token, "your_secret_key", async (err, decode) => {
//     if (err) {
//       console.log("❌ JWT verification failed:", err.message);
//       return res.status(401).send({ message: "Invalid token", status: 0 });
//     }

//     try {
//       console.log("♻️ Updating note:", id, "for tenant:", decode.tenantId);

//       await NoteModel.findOneAndUpdate(
//         { _id: id, tenantId: decode.tenantId },
//         req.body
//       );

//       res.send({ message: "Note updated", status: 1 });
//     } catch (error) {
//       console.error("❌ Error updating note:", error.message);
//       res.send({ message: error.message, status: 0 });
//     }
//   });
// });

// // -------------------- DELETE Note --------------------
// noteRouter.delete("/:id", async (req, res) => {
//   const { id } = req.params;
//   let token = req.headers.authorization?.split(" ")[1];

//   jwt.verify(token, "your_secret_key", async (err, decode) => {
//     if (err) {
//       console.log("❌ JWT verification failed:", err.message);
//       return res.status(401).send({ message: "Invalid token", status: 0 });
//     }

//     try {
//       console.log("🗑️ Deleting note:", id, "for tenant:", decode.tenantId);

//       await NoteModel.findOneAndDelete({ _id: id, tenantId: decode.tenantId });

//       res.send({ message: "Note deleted", status: 1 });
//     } catch (error) {
//       console.error("❌ Error deleting note:", error.message);
//       res.send({ message: error.message, status: 0 });
//     }
//   });
// });

// module.exports = { noteRouter };












// const express = require("express");
// const { NoteModel } = require("../models/NoteModel");
// const { authenticator } = require("../middleware/auth");
// const TenantModel = require("../models/Tenant");

// const noteRouter = express.Router();

// // ✅ Apply middleware once for all note routes
// noteRouter.use(authenticator);

// // -------------------- GET Notes --------------------
// noteRouter.get("/", async (req, res) => {
//   try {
//     console.log("✅ Fetching notes for user:", req.user.id, "Tenant:", req.user.tenantId);

//     const notes = await NoteModel.find({
//       user: req.user.id,
//       tenantId: req.user.tenantId,
//     });

//     res.send({
//       data: notes,
//       message: "Notes fetched successfully",
//       status: 1,
//     });
//   } catch (error) {
//     console.error("❌ Error fetching notes:", error.message);
//     res.send({ message: error.message, status: 0 });
//   }
// });

// // -------------------- CREATE Note --------------------
// noteRouter.post("/create", async (req, res) => {
//   try {
//     console.log("✏️ Creating note for tenant:", req.user.tenantId);

//     // Check tenant plan
//     const tenant = await TenantModel.findById(req.user.tenantId);
//     const existingNotes = await NoteModel.countDocuments({ tenantId: req.user.tenantId });

//     if (tenant.plan === "FREE" && existingNotes >= 3) {
//       return res.status(403).send({
//         message: "Free plan limit reached (max 3 notes). Upgrade to Pro.",
//         status: 0,
//       });
//     }

//     const note = new NoteModel({
//       ...req.body,
//       user: req.user.id,
//       tenantId: req.user.tenantId,
//     });

//     await note.save();

//     res.send({
//       message: "Note created successfully",
//       status: 1,
//     });
//   } catch (error) {
//     console.error("❌ Error creating note:", error.message);
//     res.send({ message: error.message, status: 0 });
//   }
// });

// // -------------------- UPDATE Note --------------------
// noteRouter.patch("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     console.log("♻️ Updating note:", id, "for tenant:", req.user.tenantId);

//     await NoteModel.findOneAndUpdate(
//       { _id: id, tenantId: req.user.tenantId },
//       req.body
//     );

//     res.send({ message: "Note updated", status: 1 });
//   } catch (error) {
//     console.error("❌ Error updating note:", error.message);
//     res.send({ message: error.message, status: 0 });
//   }
// });

// // -------------------- DELETE Note --------------------
// noteRouter.delete("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     console.log("🗑️ Deleting note:", id, "for tenant:", req.user.tenantId);

//     await NoteModel.findOneAndDelete({ _id: id, tenantId: req.user.tenantId });

//     res.send({ message: "Note deleted", status: 1 });
//   } catch (error) {
//     console.error("❌ Error deleting note:", error.message);
//     res.send({ message: error.message, status: 0 });
//   }
// });

// module.exports = { noteRouter };


// const express = require("express");
// const { NoteModel } = require("../models/NoteModel");
// const { authenticator } = require("../middleware/auth");
// const TenantModel = require("../models/Tenant");

// const noteRouter = express.Router();

// // ✅ Apply middleware once for all note routes
// noteRouter.use(authenticator);

// // -------------------- GET Notes --------------------
// noteRouter.get("/", async (req, res) => {
//   try {
//     console.log("✅ Fetching notes for Tenant:", req.user.tenantId);

//     // ✅ Members should see all notes in their tenant (not just their own)
//     const notes = await NoteModel.find({
//       tenantId: req.user.tenantId,
//     });

//     res.send({
//       data: notes,
//       message: "Notes fetched successfully",
//       status: 1,
//     });
//   } catch (error) {
//     console.error("❌ Error fetching notes:", error.message);
//     res.send({ message: error.message, status: 0 });
//   }
// });

// // -------------------- CREATE Note --------------------
// noteRouter.post("/create", async (req, res) => {
//   try {
//     console.log("✏️ Creating note for tenant:", req.user.tenantId);

//     // Check tenant plan
//     const tenant = await TenantModel.findById(req.user.tenantId);
//     const existingNotes = await NoteModel.countDocuments({ tenantId: req.user.tenantId });

//     if (tenant.plan === "FREE" && existingNotes >= 3) {
//       return res.status(403).send({
//         message: "Free plan limit reached (max 3 notes). Upgrade to Pro.",
//         status: 0,
//       });
//     }

//     const note = new NoteModel({
//       ...req.body,
//       user: req.user.id,
//       tenantId: req.user.tenantId,
//     });

//     await note.save();

//     res.send({
//       message: "Note created successfully",
//       status: 1,
//     });
//   } catch (error) {
//     console.error("❌ Error creating note:", error.message);
//     res.send({ message: error.message, status: 0 });
//   }
// });

// // -------------------- UPDATE Note --------------------
// noteRouter.patch("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     console.log("♻️ Updating note:", id, "for tenant:", req.user.tenantId);

//     await NoteModel.findOneAndUpdate(
//       { _id: id, tenantId: req.user.tenantId },
//       req.body
//     );

//     res.send({ message: "Note updated", status: 1 });
//   } catch (error) {
//     console.error("❌ Error updating note:", error.message);
//     res.send({ message: error.message, status: 0 });
//   }
// });

// // -------------------- DELETE Note --------------------
// noteRouter.delete("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     console.log("🗑️ Deleting note:", id, "for tenant:", req.user.tenantId);

//     await NoteModel.findOneAndDelete({ _id: id, tenantId: req.user.tenantId });

//     res.send({ message: "Note deleted", status: 1 });
//   } catch (error) {
//     console.error("❌ Error deleting note:", error.message);
//     res.send({ message: error.message, status: 0 });
//   }
// });

// module.exports = { noteRouter };















const express = require("express");
const { NoteModel } = require("../models/NoteModel");
const { authenticator } = require("../middleware/auth");
const TenantModel = require("../models/Tenant");

const noteRouter = express.Router();

// ✅ Apply middleware once for all note routes
noteRouter.use(authenticator);

// -------------------- GET Notes --------------------
// Members + Admins → should see ALL notes for their tenant
noteRouter.get("/", async (req, res) => {
  try {
    console.log("✅ Fetching notes for Tenant:", req.user.tenantId);

    const notes = await NoteModel.find({
      tenantId: req.user.tenantId,
    });

    res.send({
      data: notes,
      message: "Notes fetched successfully",
      status: 1,
    });
  } catch (error) {
    console.error("❌ Error fetching notes:", error.message);
    res.status(500).send({ message: error.message, status: 0 });
  }
});

// -------------------- CREATE Note --------------------
// Both Admin + Member can create
noteRouter.post("/create", async (req, res) => {
  try {
    console.log("✏️ Creating note for tenant:", req.user.tenantId);

    // ✅ Enforce tenant subscription plan
    const tenant = await TenantModel.findById(req.user.tenantId);
    const existingNotes = await NoteModel.countDocuments({ tenantId: req.user.tenantId });

    if (tenant.plan === "FREE" && existingNotes >= 3) {
      return res.status(403).send({
        message: "Free plan limit reached (max 3 notes). Upgrade to Pro.",
        status: 0,
      });
    }

    const note = new NoteModel({
      ...req.body,
      tenantId: req.user.tenantId,
      user: req.user.id, // record who created it
    });

    await note.save();

    res.send({
      data: note,
      message: "Note created successfully",
      status: 1,
    });
  } catch (error) {
    console.error("❌ Error creating note:", error.message);
    res.status(500).send({ message: error.message, status: 0 });
  }
});

// -------------------- UPDATE Note --------------------
// Both Admin + Member can update, but only inside their tenant
noteRouter.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("♻️ Updating note:", id, "for tenant:", req.user.tenantId);

    const updated = await NoteModel.findOneAndUpdate(
      { _id: id, tenantId: req.user.tenantId },
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).send({ message: "Note not found", status: 0 });
    }

    res.send({ data: updated, message: "Note updated", status: 1 });
  } catch (error) {
    console.error("❌ Error updating note:", error.message);
    res.status(500).send({ message: error.message, status: 0 });
  }
});

// -------------------- DELETE Note --------------------
// Both Admin + Member can delete, but only inside their tenant
noteRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("🗑️ Deleting note:", id, "for tenant:", req.user.tenantId);

    const deleted = await NoteModel.findOneAndDelete({
      _id: id,
      tenantId: req.user.tenantId,
    });

    if (!deleted) {
      return res.status(404).send({ message: "Note not found", status: 0 });
    }

    res.send({ message: "Note deleted", status: 1 });
  } catch (error) {
    console.error("❌ Error deleting note:", error.message);
    res.status(500).send({ message: error.message, status: 0 });
  }
});

module.exports = { noteRouter };
