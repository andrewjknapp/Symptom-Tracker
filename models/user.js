const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    posts: { type: Array, required: false },
    preferredPhysicians: { type: Array, required: false },
    medicalProfile: { type: Object, required: false }
});

const User = mongoose.model("User", userSchema);

module.exports = User;