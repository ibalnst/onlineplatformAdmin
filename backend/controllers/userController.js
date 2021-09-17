import asyncHandler from 'express-async-handler';
import User from '../models/userModal.js';
import genToken from '../utils/genToken.js';

const adminLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: genToken(user._id),
    });
  } else {
    res.status(401).json({ message: 'Invalid Email or Password' });
    throw new Error('Invalid Email or Password');
  }
});

export { adminLogin };
