import 'dotenv/config';
import express, { json, urlencoded } from 'express';
import User from './models/User.js';
import connectDB from './config/db.js';
import cors from 'cors';
const app = express();

connectDB();

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: [
    'Access-Control-Allow-Origin',
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'Authorization',
    'Set-Cookie',
  ],
  exposedHeaders: ['Set-Cookie'],
  credentials: true,
};
// Middlewares
app.options('*', cors(corsOptions));
app.use(cors(corsOptions));
app.use(json());
app.use(urlencoded({ extended: true }));

app.post('/api/users/new', async (req, res) => {
  try {
    const { fname, mname, lname, email, address, phone, gender } = req.body;
    const user = new User({
      fname,
      mname,
      lname,
      address,
      phone,
      gender,
      email,
    });
    await user.save();
    res.json({ success: true, message: 'New user created', user });
  } catch (err) {
    console.log(err);
    return res.json({ success: false, message: 'There was some error', err });
  }
});

app.listen(3001, () => console.log('listening on port 3001'));
