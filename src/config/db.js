import mongoose from "mongoose";
import { registerUserModel } from "../data/models/userModel.js";

let _dbConnection = null;

const connectDB =async ()=>{
    await connectMongooseDB();
}

const connectMongooseDB = ()=>{
    const mongoUri = process.env.MONGO_URL;
    const dbConnection =  mongoose.connect(mongoUri);
    _dbConnection = dbConnection;
    registerUserModel(dbConnection);
    console.log(`Connected to the DB:${dbConnection.connection.name}`.cyan.underline.bold);

}

export {connectDB, _dbConnection}