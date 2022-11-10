import { MongoDataSourceBase } from '../../../data/source/mongoDataSource';
import { userSuccessData } from '../data/MongoDataSource.data.mock';

class MongoDataSourceMock extends MongoDataSourceBase{
        async findByEmail(email){
            return new Promise((resolve, reject) =>{
                switch(email){
                    case "hello":
                        return resolve(userSuccessData);
                    default: return reject("Not found");
                    
                }
            });
        }
}

export  {MongoDataSourceMock};