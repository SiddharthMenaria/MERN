const User = require('./../models/userModel')

exports.register = async(req,res) => {
    const {email} = req.body
     //check if user already exists ..
     const isExistingUser = await User.
     findOne("email");
     if(isExistingUser){
          res.status(400).send("User already exist")
     }

}
const user=await user.create(req.body)
if(user){
    res.status(201).json({
        data:user
    })
}