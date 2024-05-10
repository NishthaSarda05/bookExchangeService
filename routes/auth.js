import express, { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Order from "../models/order.js";
import Cart from "../models/Cart.js";
const router = Router();

const SECRET_KEY="key"
const TIMER=2000;

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username ||!email ||!password) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    const token = jwt.sign({ userId: user._id }, SECRET_KEY);
    setTimeout(() => {
      res.json({ token,user,message:"success"});
    }, TIMER);
  } catch (error) {
    if(error.errorResponse?.errmsg?.includes("duplicate")){
      return setTimeout(() => {
        res.status(400).json({ error: "User already exists" });
      }, TIMER);
    }
    setTimeout(() => {
      res.status(500).json({ error: "Error registering user" });
    }, TIMER);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username ||!password) {
      return setTimeout(() => {
        res.status(400).json({ error: "Missing required fields" });
      }, TIMER);
    }
    const user = await User.findOne({ username });
    if (!user) {
      return setTimeout(() => {
        res.status(401).json({ error: "Invalid username or password" });
      }, TIMER);
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return setTimeout(() => {
        res.status(401).json({ error: "Invalid username or password" });
      }, TIMER);
    }
    const token = jwt.sign({ userId: user._id }, SECRET_KEY);
    setTimeout(() => {
      res.json({ token,user,message:"success" });
    }, TIMER);
  } catch (error) {
    setTimeout(() => {
      res.status(500).json({ error: "Error logging in" });
    }, TIMER);
  }
});


router.get('/user', async (req, res)=>{
  const token = req.headers.authorization.split(' ')[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(decoded.userId);

    if (!user) {
      return setTimeout(() => {
        res.status(401).json({ error: 'User not found' });
      }, TIMER);
    }
    setTimeout(() => {
      res.json({ user });
    }, TIMER);
  } catch (error) {
     setTimeout(() => {
      res.status(401).json({ error: 'Invalid token' });
    }, TIMER);
  }
});

router.get('/order-history/:username', async (req, res)=>{
  let user = req.params.username;

  try {
    const order = await Order.find({'username' : user} );

    if (!order) {
      return setTimeout(() => {
        res.status(401).json({ error: 'Oder Details are not found' });
      }, TIMER);
    }
    setTimeout(() => {
      res.json({ order });
    }, TIMER);
  } catch (error) {
     setTimeout(() => {
      res.status(401).json({ error: 'Invalid req' });
    }, TIMER);
  }
});

router.get('/cart/:username', async (req, res)=>{
  let user = req.params.username;

  try {
    const cartItem = await Cart.find({'username' : user} );

    if (!cartItem) {
      setTimeout(() => {
      res.status(200).json({ "your cart is emapty" });
    }, TIMER);
  }
  setTimeout(() => {
    res.json({ cartItem });
  }, TIMER);
} catch(error){
  setTimeout(() => {
    res.status(401).json({ error: 'Invalid req' });
  }, TIMER);
}
});

export default router;