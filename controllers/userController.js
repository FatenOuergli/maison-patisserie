const User = require('../models/userModel'); //userModel.js peut etre utilisé aussi


exports.createUser = async (req, res) => {
    try {
        const newuser = await User.create(req.body); //stana reponse men mongoose bech baad ikamel . await testaamlha ken m3 sync
        res.status(201).json({
            message: "User created !",
            data: newuser
        });
    } catch (error) {
        res.status(400).json({
            message: "Error !!!"
        });
    }
}


exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            message: "Users fetched !",
            data: users
        });
    } catch (error) {
        res.status(400).json({
            message: "Error !!!"
        });
    }
}


exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({
                message: "User not found/does not exist or has been deleted !"
            });
        }
        res.status(200).json({
            message: "User fetched !",
            data: user
        });
    } catch (error) {
        res.status(400).json({
            message: "Error !!!"
        });
    }
}


exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body, {new:true, runValidators:true}
        );
        if (!updatedUser) {
            return res.status(404).json({
                message: "User not found !"
            });
        }
        res.status(200).json({
            message: "User updated !",
            data: updatedUser
        });
    } catch (error) {
        res.status(400).json({
            message: "Error !!!"
        });
    }
}


exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id); 
        if (!deletedUser) {
            return res.status(404).json({
                message: "User not found !"
            });
        }
        res.status(200).json({
            message: "User deleted !",
            data: deletedUser
        });
    } catch (error) {
        res.status(400).json({
            message: "Error !!!"
        });
    }
}
//fonction sign up
exports.signup = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json({
            message: "User signed up !",
            data: newUser
        });
    } catch (error) {
        res.status(400).json({
            message: "Error !!!"
        });
    }
}

//fonction login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(401).json({
                message: "Invalid email or password !"
            });
        }
        res.status(200).json({
            message: "User logged in !",
            data: user
        });
    } catch (error) {
        res.status(400).json({
            message: "Error !!!"
        });
    }   }
//fonction createadmin
exports.createAdmin = async (req, res) => {
    try {
        const newAdmin = await User.create(req.body);
        res.status(201).json({
            message: "Admin created !",
            data: newAdmin
        });
    } catch (error) {
        res.status(400).json({
            message: "Error !!!"
        });
    }
}
