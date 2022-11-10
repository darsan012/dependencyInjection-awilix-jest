import { container } from '../config/dependency.js';
import { createErrorMessage, createSuccessMessage } from '../utils/responseHandler.js';


const getUser = async (req,res)=>{
    try {
        const MongoService = container.resolve("MongoService")
        const response = await MongoService.findByEmail(req);
        return createSuccessMessage({data:response,statusCode:200,res});
    } catch (error) {
        return createErrorMessage({data:null, statusCode:error.statusCode,res});
    }
}

export {getUser};