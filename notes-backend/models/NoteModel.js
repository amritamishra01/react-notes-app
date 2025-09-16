// const mongoose = require("mongoose")

// const noteSchema = mongoose.Schema({
//     title: {type: String, required: true},
//     body: {type: String, required: true},
//     user: {type: String, required: true}
// },{
//     versionKey: false
// });

// const NoteModel = mongoose.model("note", noteSchema);

// module.exports = {
//     NoteModel
// };

const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // link to user
  tenantId: { type: mongoose.Schema.Types.ObjectId, ref: "Tenant", required: true }, // NEW
}, {
  versionKey: false,
  timestamps: true
});

const NoteModel = mongoose.model("Note", noteSchema);

module.exports = { NoteModel };
