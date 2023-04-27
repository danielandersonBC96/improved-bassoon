import express from 'express'
import  bodyParser from "body-parser";
import cors from 'cors';
import helmet  from 'helmet';
import mongoose from 'mongoose';
import morgan from "morgan";
import * as dotenv from 'dotenv' ;

/* SETTINGS */

dotenv.config()
const app = express();
app.use( express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy:"cross-origin"}));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: false}))
app.use(cors())

console.log ("hello world")

/* MOGOOSE SETUP */


