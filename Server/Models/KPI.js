import mongoose  from "mongoose";
import {loadType} from "mongoose-currency"


const Schema = mongoose.Schema

loadType(mongoose);

const dayPages = new Schema(
    {
      date: String,
      revenue: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => v / 100,
      },
      expenses: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => v / 100,
      },
    },
    { toJSON: { getters: true } }
  );


const monthPages =  new Schema(
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
          nonOperationalExpenses :{
            type: mongoose.Types.Currency,
            currancy:"USD",
            get:(v) => v / 100
        },
    },

    {toJSON:{
        getters: true
    }}
)


const KPISchema= new Schema(
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

const kPI = mongoose.model("KPI", KPISchema)

export default kPI 