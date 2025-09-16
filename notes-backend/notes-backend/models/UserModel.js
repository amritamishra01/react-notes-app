// const mongoose = require("mongoose")

// const userSchema = mongoose.Schema({
//     name: {type:String, required:true},
//     email: {type:String, required:true},
//     password: {type:String, required:true}
// },{
//     versionKey: false
// });

// const UserModel = mongoose.model("user", userSchema);

// module.exports = {
//     UserModel
// };
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    tenantId: { type: mongoose.Schema.Types.ObjectId, ref: "Tenant" }, // NEW
    role: { type: String, enum: ["Admin", "Member"], default: "Member" } // NEW
}, {
    versionKey: false,
    timestamps: true
});

const UserModel = mongoose.model("User", userSchema);

module.exports = { UserModel };
