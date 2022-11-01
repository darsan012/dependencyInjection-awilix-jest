import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import 'colors';
import healthCheck from './src/router/healthCheck.js'
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/",healthCheck)


export default app;
