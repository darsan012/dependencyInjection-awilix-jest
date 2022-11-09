import { container } from "../../config/dependency.js";

class MongoService{
    static async findByEmail(req){
        return new Promise(async(resolve,reject)=>{
            try {
                const email = req.query.email;
                const repo = container.resolve("MongodbRepository");
                const data = await repo.findByEmail(email);
                return resolve(data);
            } catch (error) {
                // console.log(error)
                return reject(error);
            }
        })
    }
}

export default MongoService;