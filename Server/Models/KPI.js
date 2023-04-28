import mongoose  from "mongoose";
import {loadType} from "mongoose-currency"

const Pages = mongoose.Pages;
loadType(mongoose);

const dayPages = new Pages(
    {
        data :String,
        revenue:{
            type: mongoose.Types.Currency,
            currancy:"USD",
            get:(v) => v / 100
        },
        expenses:{
            type: mongoose.Types.Currency,
            currancy:"USD",
            get:(v) => v / 100
        },
    },
   
    {toJSON: {getters : true }}
)

const monthPages =  new Pages(
    {
        month :String,
        revenue:{
            type: mongoose.Types.Currency,
            currancy:"USD",
            get:(v) => v / 100
        },
        expenses:{
            type: mongoose.Types.Currency,
            currancy:"USD",
            get:(v) => v / 100
        },
        operationalExpenses:{
            type: mongoose.Types.Currency,
            currancy:"USD",
            get:(v) => v / 100
        },
          nonOperationExpenses :{
            type: mongoose.Types.Currency,
            currancy:"USD",
            get:(v) => v / 100
        },
    },

    {toJSON:{
        getters: true
    }}
)


const KPIPages = new Pages(
    {
        totalProfit: {
            type: mongoose.Types.Currency,
            currancy:"USD",
            get:(v) => v / 100
        },
        totalRevenue: {
            type: mongoose.Types.Currency,
            currancy:"USD",
            get:(v) => v / 100
        },
        totalExpense : {
            type: mongoose.Types.Currency,
            currancy:"USD",
            get:(v) => v / 100
        },
        expenseByCategory: {
            type:Map,
            of: {
                 type: mongoose.Types.Currency,
                 currancy:"USD",
                 get:(v) => v / 100

            }
        },
        monthlyData:[ monthPages ], 
        dailyData:[dayPages]

    }

);

const kPI = mongoose.model("KPI", KPIPages)

export default kPI 