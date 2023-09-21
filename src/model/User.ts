import bcrypt from 'bcrypt';
import mongoose, { Schema } from 'mongoose';
import validator from 'validator';

const userSchema = new mongoose.Schema({
  email: {
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
});

const contactSchema = new mongoose.Schema({
  name: {
    type:String,
    required: [true, 'please provide you name']
  },
  email: {
    type: String,
    required:[true,'please provide you email '],
    validate:[validator.isEmail,'please provide a valid email'],
    lowercase:true,
    unique:true,

  },
  phone : 
  {
    type:Number,
    required:[true,"please provide your number"],
    validate: [validator.isNumeric,'please provide number only'],

  },
  company : {
    type:String ,
    required:[true, 'please provide company name'],
  }
});


const leadSchema = new mongoose.Schema({
  name: {
    type:String,
    required: [true, "plese provide the name"],
  },
  source: {
    type:String,
    required: [true, 'please provide source']
  },
  status: {
    type: String
  }, 
  assignedTo: { type: Schema.Types.ObjectId, ref: 'User' }, // Reference to the user who is assigned to this lead
  // Additional fields as needed
});



userSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model('User', userSchema);

const Contact = mongoose.model('Contact',contactSchema);

const Lead = mongoose.model('Lead',leadSchema);

export={ User , Contact, Lead}; // Use 'export' instead of 'module.exports'
