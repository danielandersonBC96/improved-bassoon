import express from 'express'
import  bodyParser from "body-parser";
import cors from 'cors';
import helmet  from 'helmet';
import mongoose from 'mongoose';
import morgan from "morgan";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import kPI, * as  KPI from './Models/KPI.js'
import { kpis, products} from './Data/Data.js';
import router from './Routes/Kpi.js';
import Product from './Models/Product.js';
import routerProduct from './Routes/product.js';


/* SETTINGS  SERVER */

dotenv.config()
const app = express();
app.use( express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy:"cross-origin"}));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


/* ROUTERS SERVER */
app.use("/kpi" , router);
app.use("/product", routerProduct)


/* MOGOOSE SETUP */ 

const PORT = process.env.PORT || 4000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
   app.listen(PORT, () => console.log(`SERVER PORT ${PORT}`));
   await mongoose.connection.db.dropDatabase();
   kPI.insertMany(kpis);
   Product.insertMany(products)
 
   
  })
  .catch((error) =>  console.log(`${error} did not connect`));