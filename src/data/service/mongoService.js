class MongoService{
    constructor({MongodbRepository}){
        this.MongodbRepository = MongodbRepository
    }
     async findByEmail(req){
        return new Promise(async(resolve,reject)=>{
            try {
                const email = req.query.email;
                const data = await this.MongodbRepository.findByEmail(email);
                return resolve(data);
            } catch (error) {
                return reject(error);
            }
        })
    }
}

export  {MongoService};