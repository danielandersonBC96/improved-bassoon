import mongoose  from "mongoose";
import {loadType} from "mongoose-currency"


const Schema = mongoose.Schema

loadType(mongoose);


const TransactionSchema = new Schema(
    {
        buyer : {
            type: mongoose.Types.Currency,
            currancy:"USD",
            get:(v) => v / 100
        },
        amonth: {
            type: mongoose.Types.Currency,
            currancy:"USD",
            get:(v) => v / 100
        },
            PrpductIds : [{
             type: mongoose.Schema.Types.ObjectId,
             ref: "Product ",
            
        }],
    }

);

const Transaction = mongoose.model("Product", TransactionSchema)

export default Transaction;