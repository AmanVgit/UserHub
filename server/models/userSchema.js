const mongoose = require("mongoose");
const validator = require("validator")
const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true
    },
    lname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw Error("Not Valid Email")
            }
        }
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        minlegth: 10,
        maxlegth: 10
    },
    gender: {
        type: String,
        required: true,
    },
    profile: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    datecreated:Date,
    dateupdated:Date
});

//model
const users = new mongoose.model("user",userSchema)

module.exports = users;