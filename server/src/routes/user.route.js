import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

const userRoute = express.Router();
userRoute.use(express.json());

userRoute.post("/login", async (req, res) => {
  try {
    const { userId, userPassword } = req.body;
    if (!userId || !userPassword) {
      return res.status(400).json({ message: "User ID and Password required" });
    }
    const user = await User.findOne({ userId });
    if (!user) return res.status(404).json({ message: "User not found" });
    const isMatch = await bcrypt.compare(userPassword, user.userPassword);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });
    res.json({ message: "Login successful", user });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});
userRoute.post("/register", async (req, res) => {
  try {
    const { userId, userName, userSubject, userPassword, userProfile, userDOJ } = req.body;

    // Basic validation
    if (!userId || !userName || !userSubject || !userPassword) {
      return res.status(400).json({ message: "userId, userName, userSubject, and userPassword are required" });
    }

    // Check if userId already exists
    const existingUser = await User.findOne({ userId: userId.toLowerCase() });
    if (existingUser) {
      return res.status(409).json({ message: "User with this userId already exists" });
    }
    const hashedPassword = await bcrypt.hash(userPassword, 10);
    // Create new user
    const newUser = new User({
      userId: userId.toLowerCase(),
      userName,
      userSubject,
      userPassword:hashedPassword,
      userProfile: userProfile || null,
      userDOJ: userDOJ ? new Date(userDOJ) : null,
    });

    await newUser.save();

    res.status(201).json({
      message: "User registered successfully",
      user: {
        userId: newUser.userId,
        userName: newUser.userName,
        userSubject: newUser.userSubject,
        userProfile: newUser.userProfile,
        userDOJ: newUser.userDOJ,
        createdAt: newUser.createdAt,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
userRoute.post("/users", async (req, res) => {
  try {
    const { userId, userPassword } = req.body;
    const status = await User.findOne({ userId });
    if (status) {
      return res.status(200).json({ message: "userId already exists" });
    }
    const hashedPassword = await bcrypt.hash(userPassword, 10);
    const user = new User({
      ...req.body,
      userPassword: hashedPassword
    });
    await user.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

userRoute.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

userRoute.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

userRoute.put("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User updated successfully", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

userRoute.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default userRoute;
