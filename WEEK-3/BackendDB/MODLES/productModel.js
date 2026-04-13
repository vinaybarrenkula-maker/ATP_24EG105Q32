import {Schema,model} from 'mongoose'

const productSchema=new Schema({
    productId:{
        type:Number,
        required:true

    },
    productName: {
        type:String,
        required:[true,"productname required"]
        
    },
    price: {
        type:Number,
        required:[true,"product price required"],
        min:[10000,"min of 10000 price"],
        max:[50000,"max of 50000 price"]
    },
    brand: {
        type:String,
        required:[true,"product brand required"]
        
    },
}

)
export const productModel=model("products",productSchema)