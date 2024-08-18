const express = require("express");
const { registerUser, loginUser,currentUser } = require("../Controllers/userController");
const  validatetoken = require("../Middleware/validatetokenhandler")
const router = express.Router();

router.post("/register",registerUser);

router.post("/login",loginUser);

router.get("/current",validatetoken,currentUser);

module.exports = router;