import mongoose  from "mongoose";
import {loadType} from "mongoose-currency"


const Schema = mongoose.Schema

loadType(mongoose);


const TransactionSchema = new Schema(
    {
        buyer : {
            type: String,
            require:true,
        },
        amount: {
            type: mongoose.Types.Currency,
            currancy:"USD",
            get:(v) => v / 100,
        },
            productIds : [{
             type: mongoose.Schema.Types.ObjectId,
             ref: "Product ",
            
        }],
    }

);

const Transaction = mongoose.model("Transaction", TransactionSchema)

export default Transaction;