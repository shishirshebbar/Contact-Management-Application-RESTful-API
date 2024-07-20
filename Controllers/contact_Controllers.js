const asynchandler = require("express-async-handler")




// display: Get all contacts
// route GET/api/contacts
//access public


const getContacts = asynchandler(async(req,res)=>{
    res.status(200).json({message: "Get all contacts"});
}
)
const createContact = asynchandler(async(req,res)=>{
    console.log("The request body is: " ,req.body);
    const{name,email,phone} = req.body;
    if(!name || !email || !phone){
        res.send(400);
        throw new Error("All fields are madatory")
        
    }
    res.status(201).json({message: "Create contacts"});
}
)
const getContact = asynchandler(async(req,res)=>{
    res.status(200).json({message: `Get contact for ${req.params.id}`});
})

const updateContact = asynchandler(async(req,res)=>{
    res.status(200).json({message: `Update contact for ${req.params.id}`});
})

const deleteContact = asynchandler(async(req,res)=>{
    res.status(200).json({message: `Delete contact for ${req.params.id}`});
}
)
module.exports = {getContacts, createContact,getContact, updateContact, deleteContact};