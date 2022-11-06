import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import 'colors';
import healthCheck from './src/router/healthCheck.js'
import {connectDB} from './src/config/db.js'
import { registerDependency } from './src/config/dependency.js';
dotenv.config();

connectDB().then(()=>{
    //regestering the dependencies
    registerDependency();
})
const app = express();

app.use(express.json());
app.use(cors());

app.use("/",healthCheck)


export default app;
