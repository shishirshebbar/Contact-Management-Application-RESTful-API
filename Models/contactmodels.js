const mongoose = require("mongoose");

const contactschema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Add the name of the contact"],
    },
    email:{
        type:String,
        required:[true,"Add the email id of the contact"],
    },
    phone:{
        type:String,
        required:[true,"Add the phone number of the contact"],
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"

    }
},
{
    timestamps:true,
}
);
module.exports = mongoose.model("Contact", contactschema);