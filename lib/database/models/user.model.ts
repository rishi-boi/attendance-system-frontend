import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  firstName: { type: String },
  middleName: { type: String },
  lastName: { type: String },
  role: { type: String },
  department: { type: String },
  year: { type: String },
  dateOfBirth: { type: String },
  phoneNumber: { type: String },
  roll_no: { type: String },
  unique_id: { type: String },
});

const User = models.User || model("User", UserSchema);

export default User;
