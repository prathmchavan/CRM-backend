import {Document, Schema, model } from "mongoose"

interface Product extends Document{

    name : string,
    description : string,
    price : number,
    category : string,
    image : string 
}


const productSchema = new Schema<Product>({
    name :{
        type: String , required:[true,"Name is Required"]},

    description:{
     type : String,
     required:[true, ' please provide the discription']   
    },
    price:{
        type : Number,
        required:[true, ' please provide the price for the product']   
       },
       category:{
        type : String,
        required:[true, ' please provide the discription']   
       },
    image:{
        type : String,
        // required:[true, ' please provide the discription']   
       }
       
          
});

export default model<Product>('Product',productSchema);