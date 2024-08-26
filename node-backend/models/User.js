import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: { type: String, enum: ['docteur', 'secretaire'], required: true },
});

module.exports = mongoose.model('User', UserSchema);