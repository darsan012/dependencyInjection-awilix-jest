import request from "supertest"
import { container } from "../../../config/dependency";
import Server from "../../server.mock";


const PORT = process.env.PORT||8081;

const server = new Server(PORT);
// const MongoDataSourceMock =  container.resolve("MongoDataSource")

let app

describe("Testing the user route",()=>{
    beforeAll(async()=>{
        app =await server.run(PORT);
    })
    afterAll(()=>{
        server.stop();
    })
    test("when correct email is provided, should return status code 200",async()=>{
       const res = await request(app).get('/user?email=hello')
    // expect(res.statusCode).toEqual(200)

       console.log(res.body,"Hello there...................")
    })
})