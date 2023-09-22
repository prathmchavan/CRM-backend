import express, { Request, Response } from 'express';

import User from '../model/User';


const router = express.Router();

router.post('/' , async ( req: Request , res: Response)=>{
    const { email, username, password, address } = req.body;

    try {
      const user = await User.findOne({ email:email });
      if (user) {
        return res.status(409).json({ message: 'User already exists' });
      }
      await User.create({ email, username, password, address });
      // You might want to send a success response here
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      // Handle errors here
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
});

export default router;
