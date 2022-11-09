import mongoose from "mongoose";
import ROLES_ENUMS from "../enums/rolesEnums.js";

const userSchemas = new mongoose.Schema(
  {
    user_name: { type: String, required: true, trim: true },
    email: { type: String, required: true},
    isDeleted: { type: Boolean, required: true, default: false },
    role:{type: String, required: true,enum:ROLES_ENUMS}
  },
  {
    timestamps: true,
  }
);

export default userSchemas;