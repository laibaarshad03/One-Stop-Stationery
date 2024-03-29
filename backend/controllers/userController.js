import asyncHandler from "express-async-handler";
import User from '../models/userModel.js'
import generateToken from "../utils/generateToken.js";

// auth user
// post request api/user/login

const authUser=asyncHandler(async(req,res)=>{
    //console.log(email,password)
   // console.log(req.body)

   const{email, password}=req.body
   const user= await User.findOne({email})
   if (user && (await user.matchPassword(password))){
    res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
    })
   }else{
        res.status(401)
        throw new Error('Invalid email or password')
   }
})

const getUserProfile=asyncHandler(async(req,res)=>{
    const user= await User.findById(req.user._id)
    if(user){
        res.json({
            _id:user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
           
        })
    }
    else{
        res.status(404)
        throw new Error('User not found')
    }
})




// register new user
// post request api/users

const registerUser=asyncHandler(async(req,res)=>{
    const{name,password,phone,email}=req.body
 //    console.log(req.body)
    const userExists = await User.findOne({email})
    if(userExists) {
        res.status(400)
        throw new Error('User already exists')

    }
    const user = await User.create({
        name,
        password,
        phone,
        email
    })

    if(user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
 })

export {authUser, getUserProfile, registerUser}