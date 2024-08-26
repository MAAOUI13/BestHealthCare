import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dbConnect from '../../utils/dbConnect';
import User from '../../models/User';

dbConnect();

export default async (req, res) => {
  if (req.method === 'POST') {
    const { email, password, role } = req.body;
    try {
      const user = await User.findOne({ email, role });
      if (!user) {
        return res.status(400).json({ message: 'User not found' });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
      const token = jwt.sign({ userId: user._id, role: user.role }, 'secretkey', { expiresIn: '1h' });
      res.status(200).json({ token, role: user.role });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
