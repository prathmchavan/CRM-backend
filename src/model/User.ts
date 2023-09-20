import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import validator from 'validator';

const userSchema = new mongoose.Schema({
  email: {
    type: String, // Use actual JavaScript type 'String'
    required: [true, 'Please enter an email'],
    validate: [validator.isEmail, 'Please provide a valid email'],
    lowercase: true,
    unique: true,
  },
  username: {
    type: String, // Use actual JavaScript type 'String'
    required: [true, 'Please enter a Username'],
    lowercase: true,
    unique: true,
  },
  password: {
    type: String, // Use actual JavaScript type 'String'
    required: [true, 'Please enter a password'],
    minlength: [6, 'Minimum length of password should be 6'],
  },
});

userSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model('User', userSchema);

export { User }; // Use 'export' instead of 'module.exports'
