import express from 'express';
import {connectDB} from './src/config/db.js'
import { registerDependency } from './src/config/dependency.js';



registerDependency().then(()=>{
    connectDB();
})

import dotenv from 'dotenv';
import cors from 'cors';
import 'colors';

import userRouter from './src/router/userRoute.js';
import healthCheck from './src/router/healthCheck.js'
dotenv.config();
let NODE_ENV = process.env.NODE_ENV||'development';
class Server{
    constructor(){
        this.app = express();
        this.setup();
    }
    setup(){
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use("/",healthCheck);
        this.app.use("/",userRouter);
    }
    run(port){
        this.server = this.app.listen(port,()=>{
            console.log(
                `Server is running in ${NODE_ENV} mode on port ${port}`.inverse.green
              );
        })
    }
    stop(done) {
        this.server.close(done);
    }
}




export default Server;