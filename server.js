

const express = require("express");
const errorHandler = require("./Middleware/error_handler");
const connectdb = require("./Config/DatabaseConnection");
const dotenv = require("dotenv").config();
connectdb();
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());//Middleware
app.use(errorHandler);//middleware
app.use("/api/contacts", require("./routes/contact_Routes"));//Adding middleware
app.use("/api/users",require("./routes/user_Routes"))
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});