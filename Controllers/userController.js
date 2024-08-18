const asynchandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../Models/userModel");
const jwt  = require("jsonwebtoken");
//register an user
const registerUser = asynchandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !password || !email) {
        res.status(400);
        throw new Error("Entering all fields are mandatory");
    }
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error("User already exists.");
    }
    // Password Hashing
    const hashedpassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password is: ", hashedpassword);
    const user = await User.create({
        username,
        email,
        password: hashedpassword
    });
    console.log(`User created ${user}`);
    if (user) {
        return res.status(201).json({ _id: user.id, email: user.email });
    } else {
        res.status(400);
        throw new Error("User creation is invalid..Please try again.");
    }
});

const loginUser = asynchandler(async (req, res) => {
    const {email,password} = req.body;
    if(!email||!password){
        res.status(400);
        throw new Error("All fields are mandatory.Please fill them.")
    }
    const user = await User.findOne({email});
    if (user&&(await bcrypt.compare(password,user.password))){
        const accessToken = jwt.sign({
            user:{
                username:user.username,
                email:user.email,
                id:user.id
            },

        },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:'15m'}//sets the expiration time of token to 15 minutes

    );
        res.status(200).json({accessToken});

    }
    else{
        res.status(401);//email or password not valid
        throw new Error("Email or password is invalid")
    }
});

const currentUser = asynchandler(async (req, res) => {
    res.json(req.user);
});

module.exports = { registerUser, loginUser, currentUser };
