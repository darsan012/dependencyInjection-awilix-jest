import awilix from "awilix";
// import { UserController } from "../controllers/userController.js";
import {MongoService} from "../data/service/mongoService.js";
import { MongoDataSource } from "../data/source/mongoDataSource.js";
import {MongodbRepository} from "../repository/mongoDBRepository.js";

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

async function registerDependency(){
  container.register({
    MongoDataSource: awilix.asClass(MongoDataSource).singleton(),
    MongodbRepository: awilix.asClass(MongodbRepository).singleton(),
    //registering the service
    MongoService: awilix.asClass(MongoService).singleton(),
    //registering the controllers
    // UserController:awilix.asClass(UserController).singleton(),
  });
  console.log(`Dependencies registered......`.blue.underline.bold);
};

export { registerDependency, container };
