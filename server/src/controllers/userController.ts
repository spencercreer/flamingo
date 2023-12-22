import { Request, Response } from "express";
import User from "../models/user";

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await User.find({});

    res.status(201).json(users);
  } catch (error) {
    console.error(error);
    res.status(400).json("Failed to create a user.");
  }
};

export const signUp = async (req: any, res: Response): Promise<void> => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });

    // Store user information in the session
    req.session.user = user;

    // What is 201
    res.status(201).json({
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json("Failed to create a user.");
  }
};

export const login = async (req: any, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found." });
    }

    const correctPw = await user.comparePassword(password);
    if (!correctPw) {
      return res.status(400).json({ message: "Invalid user credentials." });
    }

    // Store user information in the session
    req.session.user = user;

    // What is 201
    res.status(201).json({
      user,
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// export const logout = async (req: any, res: Response) => {
//   req.session.destroy((err) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).json({ error: "Internal Server Error" });
//     }
//     res.status(200).json({ message: "Logout successful" });
//   });
// };
