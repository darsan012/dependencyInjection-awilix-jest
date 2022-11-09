import { UserModel } from "../models/userModel.js";

class MongoDataSourceBase {
  async findByEmail(email) {}
}

class MongoDataSource extends MongoDataSourceBase {
  constructor() {
    super();
    this.UserModel = UserModel();
  }

   async findByEmail(email) {
    return new Promise(async (resolve,reject) => {
      try {
        const response = await this.UserModel.findOne({email}).lean();
        return resolve(response);
      } catch (e) {
        console.error(e.message);
        return reject(e);
      }
    });
  }
}

export {MongoDataSource, MongoDataSourceBase};
