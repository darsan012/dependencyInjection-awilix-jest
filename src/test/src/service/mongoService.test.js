import awilix from "awilix";
import { container } from "../../../config/dependency";
import { MongodbRepository } from "../../../repository/mongoDBRepository";
import "dotenv/config";
import {MongoDataSourceMock} from "../../mock/implemantation/MongoDataSource.mock";
import { MongoServiceMock } from "../../mock/implemantation/mongoService.mock";

describe("mongoservice test",()=>{
    beforeEach(()=>{
        MongoServiceMock.mockClear();
        container.register({
            MongoDataSource:awilix.asClass(MongoDataSourceMock).singleton(),
            MongodbRepository:awilix.asClass(MongodbRepository).singleton(),
            // MongoService:awilix.asValue(MongoServiceMock)
        })
    })
    afterEach(()=>{
        container.dispose();
    })
    test("when existing email is provided should return status code 200",async()=>{
        const mongoService = container.resolve("MongodbRepository")
       const res =await mongoService.findByEmail("hello")
       expect(res).not.toBeNull()

    })
})