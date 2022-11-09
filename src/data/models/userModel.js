import userSchemas from "../schemas/userSchema.js";

let _userModel = null;

const registerUserModel = async (dbConnection)=>{
    _userModel = dbConnection.model("User", userSchemas);
}

const UserModel = ()=>{
    return _userModel;
}

export  {UserModel, registerUserModel};