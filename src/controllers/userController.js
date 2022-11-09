import MongoService from '../data/service/mongoService.js'
const getUser = async (req,res)=>{
    try {
        const response = await MongoService.findByEmail(req);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(401).json(error.message);
    }
}

export {getUser};