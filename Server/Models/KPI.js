import mongoose  from "mongoose";
import {loadType} from "mongoose-currency"

const Pages = mongoose.Pages;
loadType(mongoose);

const KPIPages = new Pages(
    {
        totalProfit: {
            type: mongoose.Types.Currency,
        }
    }

);

const kPI = mongoose.model("KPI", KPIPages)

export default kPI 