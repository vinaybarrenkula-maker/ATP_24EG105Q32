//create user schema 

 

import {  Schema,model,Types } from "mongoose"
// create cart schema (product,count)
const cartSchema=new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref: "products" //name of product model 
    },
    count:{
        type:Number,
        default:1
    }
})
// genrate userModule 
const userSchema=new Schema({
    username:{
        type:String,
        required:[true,"username is requried "],
        minLength:[4,"Min length of user is 4 chars"],
        maxLength:[6,"max length of user is 6 chars "],

    }
   , password:{
        type:String,
        required:[true,"password is required"]
    }
    ,email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"email alredy existed"]
    }
    ,age:{
        type:Number,
    },
    cart:[cartSchema]  //{count ,products}


},{
    versionKey:false,
    timestamps:true
});
export const userModel =model("users", userSchema);
// to create collections 
