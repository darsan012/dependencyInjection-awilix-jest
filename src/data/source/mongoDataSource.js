import mongoose from "mongoose";
import { UserModel } from "../models/userModel.js";

class MongoDataSourceBase {
  async findUserById(userId) {}
}

class MongoDataSource extends MongoDataSourceBase {
  constructor() {
    super();
    this.UserModel = UserModel;
  }

  async findUserById(userId) {
    return new Promise(async (resolve) => {
      try {
        const response = await this.UserModel.find({ _id: userId }.lean());
        return resolve([response, null]);
      } catch (e) {
        console.error(e);
        return resolve([null, e]);
      }
    });
  }
}

export {MongoDataSource, MongoDataSourceBase};
