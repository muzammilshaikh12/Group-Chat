const Message = require("../models/message");

const User = require("../models/user");

exports.sendmsg = (req, res, next) => {
  const { message } = req.body;
  if (message == undefined || message.length === 0) {
    return res.status(400).json({ err: "Parameters Missing" });
  } else {
    Message.create({ message, userId: req.user.id })
      .then((result) => {
        res.status(201).json({ message: "Message Sent", success: true });
      })
      .catch((err) => {
        res.status(500).json({ err: "Something went wrong" });
      });
  }
};

exports.retrievemsg = (req,res,next)=>{
    Message.findAll()
    .then(messages=>{
        res.status(200).json({data:messages,success:true})
    })
    .catch(err=>{
        res.status(500).json({message:'Something Went Wrong', err})
    })
}