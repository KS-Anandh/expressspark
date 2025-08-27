import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    userName: {
      type: String,
      required: true,
    },
    userSubject: {
      type: String,
      required: true,
    },
    userPassword: {
      type: String,
      required: true,
    },
    userProfile: {
      type: String,
    },
    userDOJ: {
      type: Date,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('users',userSchema);
export default User;
