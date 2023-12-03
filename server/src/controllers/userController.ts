import { Request, Response } from "express";
import User from "../models/user";

export const signUp = async (
  req: Request,
  res: Response
): Promise<void> => {
    try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json("Failed to create a user.");
  }
};

export const login = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: "User not found." });
    }

    const correctPw = await user.comparePassword(password);
    if (!correctPw) {
        return res.status(400).json({ message: 'Invalid user credentials.' });
    }

    res.json({
        user
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
