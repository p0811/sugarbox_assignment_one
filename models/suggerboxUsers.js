const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, "can't be blank"],
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        index: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "can't be blank"]
    }
});
UserSchema.plugin(uniqueValidator);
const Users = mongoose.model("suggerbox_users", UserSchema);
module.exports = Users;