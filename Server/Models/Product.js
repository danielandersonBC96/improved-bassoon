import mongoose  from "mongoose";
import {loadType} from "mongoose-currency"


const Schema = mongoose.Schema

loadType(mongoose);


const ProductSchema= new Schema(
    {
         Price : {
            type: mongoose.Types.Currency,
            currancy:"USD",
            get:(v) => v / 100
        },
        expense: {
            type: mongoose.Types.Currency,
            currancy:"USD",
            get:(v) => v / 100
        },
         transaction  : [{
             type: mongoose.Schema.Types.ObjectId,
             ref: "Transaction ",
            
        }],
    }

);

const Product = mongoose.model("Product", ProductSchema)

export default Product;