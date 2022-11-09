class MongodbRepository{
    constructor(opts){
        this.MongoDataSource = opts.MongoDataSource;
    }
    async findByEmail(email){
        return new Promise(async(resolve,reject) => {
            try {
                const response = await this.MongoDataSource.findByEmail(email);
                resolve(response);
            } catch (error) {
                return reject(error);
            }
        })
    }
}

export {MongodbRepository};