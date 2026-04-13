//create min express app(Seperate Route)
import exp from 'express'
import { userModel } from '../MODLES/userModel.js';
import jwt from 'jsonwebtoken'
import { compare, hash } from 'bcryptjs';
import { verifyToken } from '../MIDDLEWARES/VerifyFun.js';

export const userApp = exp.Router()
const {sign}=jwt
//Define USER REST API Routes

//Create a new User
userApp.post("/users", async (req, res) => {
    //get new user obj from req
    const userData = req.body;
    //hashed password
    const hashedPassword= await hash(userData.password,10)
    //replace hashedPassword in userData
    userData.password=hashedPassword
    //create new user document
    const newUserDocument=new userModel(userData)
    // save the newUserDocument in database

    const savedNewUserDocumnet = await newUserDocument.save()
    
    //send res
    res.status(201).json({ message: "User Created",payload:savedNewUserDocumnet }) //201 status code shows successfull creation of user
})
// )

//Read all users
// making it to a protected route 
userApp.get("/users", async (req,res) =>{
    //read all users from db
    let usersList = await userModel.find()
    //send res
    res.status(201).json({ message: "users", payload: usersList })
})

//Read a user by Object id
userApp.get("/users/:id", async (req, res) => {
    //Read object id from req params
    const uid = req.params.id
    //find user by id
    // const userObj= await UserModel.findOne({_id:uid})
    //console.log(userObj);
    const userObj=await userModel.findById(uid)
    //send res
    res.status(201).json({ message: "User", payload: userObj })
})

//Update a user by id
userApp.put("/users/:id", async (req, res) => {
    //get modified user from req
    const modifiedUser = req.body
    const uid = req.params.id
    //find user by id and update
    const updatedUser = await userModel.findByIdAndUpdate(
        uid,
        { $set: { ...modifiedUser } },
        { new: true })
    //send res
    res.status(201).json({ message: "User Modified", payload: updatedUser })
})
userApp.post("/auth",verifyToken,async(req,res)=>
{
    const {email,password}=req.body;
     let user= await userModel.findOne({email:email})
        if(user==null)
        {
           return res.status(400).json({message:"Invalid Email"})
        }
    let result=await compare(password,user.password)
    if(result==false){
      return res.status(400).json({message:"invalid password "})
    }
     const signedToken=sign({email:user.email},"abcd",{expiresIn:"1hr"})
     req.cookies("token",signedToken,{
        httpOnly:true,
        sameSite:"lax" ,// stores in secure http only ,
        secure :false 
     })
     res.status(200).json({message:"login success ",token:signedToken})
})


//})
//
userApp.put("/cart/product_id/:id",verifyToken,async (req,res)=>{

    let productid=req.params.id
    const emailUser=req.user.email

    const user = await userModel.findOne({email:emailUser})

    if(!user){
        return res.status(400).json({message :"user not found"})
    }

    const updatedUser = await userModel.findOneAndUpdate(
        {email:emailUser},
        {$push:{cart:{product:productid}}},
        {new:true}
    ).populate("cart.product")

    res.status(200).json({
        message :"product added to cart",
        payload:updatedUser
    })

})