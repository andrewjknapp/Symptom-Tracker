const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    id: String,
    password: { type: String, required: true },
    email: { type: String, require: true },
    firstName: { type: String, required: true },
    lastName: String,
    isDeleted: {
        type: Boolean,
        default: false
    },
    preferredPhysicians: { type: Array },
    medicalProfile: { type: Object },
    posts: { type: Array }
});

UserSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
UserSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};
const User = mongoose.model("User", UserSchema);

module.exports = User;