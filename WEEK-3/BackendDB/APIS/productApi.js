import exp from 'express'
import {productModel} from "../MODLES/productModel.js"
import {hash} from 'bcryptjs'

export  const productApp=exp.Router()
//  a. Create product
productApp.post("/products",async(req,res)=>
{
    const product=req.body
    const productlist= await productModel(product)
    const result= await productlist.save();
    
    res.status(200).json({message:"product added",payload:result})

})


//         b. Read all products
productApp.get("/products",async(req,res)=>{
    let productlist=req.body;
    let productDocument=await productModel.find();
    res.status(200).json({message:"The products Are:",payload:productDocument})

})
//         c. Read a product by productId
productApp.get("/products/:id",async(req,res)=>{
    let Pid=req.params.id
    let productdoct=await productModel.findById(Pid)
    res.status(200).json({message :"The give id details:",payload:productdoct})  
})
//         d. Update a product by productId
productApp.put("/products/:id",async(req,res)=>
{    let modifedproduct =req.body
    let pid=req.params.id;
    let productdoct=await productModel.findByIdAndUpdate(pid,{ $set: { ...modifedproduct } },
        { new: true })
    res.status(200).json({message:"The updated one is:",payload:productdoct})
     
})
//         e. Delete a product by productId
productApp.delete("/products/:id", async (req, res) => {

    let productdoct = await productModel.findByIdAndDelete(req.params.id)

    res.status(200).json({
        message: "The deleted product is:",
        payload: productdoct
    })

})