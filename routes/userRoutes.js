const express = require('express');
const router = express.Router();
const User = require("../models/userModel")

router.get('/',(req, res)=>{
res.send ('WELCOME TO MY API')
.status(200);
})

router.post ('/signup', async (req, res)=>{

    let {firstName, lastName, email, password} = req.body;

 
    const checkEmail = await User.findOne({email})
    
    if (checkEmail) {
        return res.json ({
            status: "failed,",
            message: "email already exists"
        })}
    const newuser = {firstName, lastName, email, password}
    const createUser = await User.create(newuser);

    res.status(201).json({
        status: "success",
        data:{
            id: createUser._id,
            firstName: createUser.firstName,
            lastName: createUser.lastName,
            email: createUser.email
        }
    });

});



module.exports = router;