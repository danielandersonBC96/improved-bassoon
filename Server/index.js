import express from 'express'
import  bodyParser from "body-parser";
import cors from 'cors';
import helmet  from 'helmet';
import mongoose from 'mongoose';
import morgan from "morgan";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import KpisRoutes from "./routes/Kpi.js"


/* SETTINGS  SERVER */

dotenv.config()
const app = express();
app.use( express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy:"cross-origin"}));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())


/* ROUTERS SERVER */
app.use("/Kpi", KpisRoutes)




/* MOGOOSE SETUP */ 

const PORT = process.env.PORT || 4000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
   app.listen(PORT, () => console.log(`SERVER PORT ${PORT}`))
  })
  .catch((error) =>  console.log(`${error} did not connect`))