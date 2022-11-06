import awilix from "awilix";
import { MongoDataSource } from "../data/source/mongoDataSource.js";

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

const registerDependency = () => {
  container.register({
    MongoDataSource: awilix.asClass(MongoDataSource).singleton(),
  });
  console.log(`Dependencies registered......`.blue.underline.bold);
};

export { registerDependency, container };
