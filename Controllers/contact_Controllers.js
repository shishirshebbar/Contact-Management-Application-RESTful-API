const asynchandler = require("express-async-handler")

const Contact = require("../Models/contactmodels");


// display: Get all contacts
// route GET/api/contacts
//access private


const getContacts = asynchandler(async(req,res)=>{
    const contacts = await Contact.find({user_id:req.user.id});
    res.status(200).json(contacts);
}
)
const createContact = asynchandler(async(req,res)=>{
    console.log("The request body is: " ,req.body);
    const{name,email,phone} = req.body;
    if(!name || !email || !phone){
        res.send(400);
        throw new Error("All fields are madatory")
        
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id:req.user.id
    });
    res.status(201).json(contact);
}
)
const getContact = asynchandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
})

const updateContact = asynchandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
//check
    if(contact.user_id.toString()!==req.user.id){
        res.status(403);//403-server understood the request but refused to process it
        throw new Error("User doesn't have the permission to update other user's contacts.")
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json(updatedContact);
})

const deleteContact = asynchandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }//check 
    if(contact.user_id.toString()!==req.user.id){
        res.status(403);//403-server understood the request but refused to process it
        throw new Error("User doesn't have the permission to delete other user's contacts.")
    }
    await Contact.deleteOne({_id:req.params.id});
    res.status(200).json(contact);
}
)
module.exports = {getContacts, createContact,getContact, updateContact, deleteContact};