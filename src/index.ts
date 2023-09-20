import express ,{Request, Response} from 'express';
import dotenv from 'dotenv'
import mongoose, { ConnectOptions } from 'mongoose';
dotenv.config();
import {User} from './model/User'

const app  = express();
// const port = 3000;
const PORT: any = process.env.PORT||8000;
const db_uri : any = process.env.DB_URL;







mongoose.set('strictQuery', false) 

mongoose.connect(db_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions)


mongoose.connection.on('connected',()=>{
  console.log('connected to mongodb')
})

mongoose.connection.on('error',()=>{
  console.error("error connecting to mongodb server")
})



app.get('/', (req : Request, res : Response) => {
  res.send('Hello, Express with TypeScript!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
