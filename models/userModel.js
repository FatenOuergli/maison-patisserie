const { Schema, model } = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new Schema({

    name: {
        type: String,
        required: [true, "The name is required !"],
        maxlength: 30,
        minlength: 3
    },

    email: {
        type: String,
        required: [true, "The email is required !"],
        unique: true,
        validate: [isEmail, "This email is not valid"],
        lowercase: true
    },

    password: {
        type: String,
        required: [true, "The password is required !"],
        minlength: 8
    },

    confirm_password: {
        type: String,
        required: [true, "The confirm password is required !"],
        minlength: 8,

        validate: {
            validator: function (cpass) {
                return cpass === this.password;
            },
            message: "Password and confirm password don't match !!"
        }
    },

    role: {
        type: String,
        enum: ["admin", "user", "superadmin"],
        default: "user"
    },

    created_at: {
        type: Date,
       default: Date.now()
    },

    password_changed_at: {
        type: Date,
        default: Date.now()
    }
});

const User = model("User", userSchema);

module.exports = User;