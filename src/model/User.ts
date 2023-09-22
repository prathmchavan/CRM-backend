  import bcrypt from 'bcrypt';
  import  { Schema, model, Document } from 'mongoose';
  import validator from 'validator';

  interface User extends Document{
    name: string;
    email: string;
    username: string;
    password: string;
    address: string;
  }

  const userSchema = new Schema<User>({
    name:  {
      type: String, 
      required: [true, 'Please enter an name '],
      // validate: [validator.isEmail, 'Please provide a valid email'],
      // lowercase: true,
      // unique: true,
    },  
    email:  {
      type: String, 
      required: [true, 'Please enter an email'],
      validate: [validator.isEmail, 'Please provide a valid email'],
      lowercase: true,
      unique: true,
    },
    username: {
      type: String, 
      required: [true, 'Please enter a Username'],
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please enter a password'],
      minlength: [6, 'Minimum length of password should be 6'],
    },

    address:{
      type :String ,
      required:[true,'please provide the address for delivery references']
    }
  });


  userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });


  export default model<User>('User',userSchema)