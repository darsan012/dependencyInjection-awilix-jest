import awilix from "awilix";
import { MongodbRepository } from "../repository/mongoDBRepository";
import { MongoDataSourceMock } from "./mock/implemantation/MongoDataSource.mock";
// import { MongoServiceMock } from "./mock/implemantation/mongoService.mock";

import {container} from ".././config/dependency.js"
import { MongoService } from "../data/service/mongoService";
async function registerDependency(){
  container.register({
    MongoDataSource:awilix.asClass(MongoDataSourceMock).singleton(),
    MongodbRepository:awilix.asClass(MongodbRepository).singleton(),
    MongoService:awilix.asClass(MongoService).singleton()
  });
  console.log(`Dependencies registered......`.blue.underline.bold);
};

export { registerDependency };
