import express from 'express';
import {registerDependency} from './dependency.mock.js'


registerDependency()

import dotenv from 'dotenv';
import cors from 'cors';
import 'colors';


import healthCheck from '../router/healthCheck.js'
import userRouter from '../router/userRoute.js';

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
    async run(port){
        this.server = this.app.listen(port,()=>{
            console.log(
                `Server is running in ${NODE_ENV} mode on port ${port}`.inverse.green
              );
        })
        return this.app;
    }
    stop(done) {
        this.server.close(done);
    }
}




export default Server;