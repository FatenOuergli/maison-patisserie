//méthode classique
const express = require('express');
const {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
} = require('../controllers/userController');


//const { createUser } = require("../controllers/userController");

const router =require("express").Router();
//pour optimiser
router.route("/").post(createUser).get(getAllUsers);
router.route("/:id").get(getUserById).patch(updateUser).delete(deleteUser);
router.route
module.exports = router;