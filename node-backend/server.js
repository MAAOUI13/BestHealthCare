import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth.js'; // Ajoutez l'extension .js

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/medicalApp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.use('/api/auth', authRoutes);

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});