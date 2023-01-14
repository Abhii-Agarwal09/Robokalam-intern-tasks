import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    fname: String,
    mname: String,
    lname: String,
    phone: Number,
    gender: String,
    address: String,
    email: String,
  },
  { timestamps: true }
);

const User = model('User', userSchema);

export default User;
