const User = require('../models/user.js')
const bcrypt = require('bcrypt')

const token = require('jsonwebtoken')

exports.signup = (req,res,next)=>{
    const {name,email,number,password} = req.body
    if(name == undefined || name.length === 0 
        || email == undefined || email.length === 0
        || number == undefined || number.length === 0
        || password == undefined || password.length === 0)
        {
            return res.status(400).json({err:'Parameters Missing'})
        }
        
        User.findAll()
        .then(users=>{ 
                bcrypt.hash(password, 10 , async(err,hash)=>{
                    console.log(err)
                    await User.create({name,email,number,password:hash})
                    .then(res.status(201).json({message:'User Successfully Created'}))
                    .catch(err=>res.status(500).json({message:'Something went wrong'}))
                })
               
            
        })
        .catch(err=>res.status(500).json({err:'Something Went wrong'}))
   
}