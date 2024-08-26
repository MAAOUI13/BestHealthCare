import dbConnect from '../../utils/dbConnect';
import User from '../../models/User';
import bcrypt from 'bcryptjs';

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        const { name, email, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword, role });
        await user.save();
        res.status(201).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
