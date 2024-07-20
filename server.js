

const express = require("express");
const errorHandler = require("./Middleware/error_handler");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());//Middleware
app.use(errorHandler);//middleware
app.use("/api/contacts", require("./routes/contact_Routes"));//Adding middleware
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});