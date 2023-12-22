import { Request, Response } from "express";
import Prospect from "../models/prospect";
import User from "../models/user";

export const getAllProspects = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // const users = await User.find({});
    // res.status(201).json(users);
  } catch (error) {
    // console.error(error);
    // res.status(400).json("Failed to create a user.");
  }
};

export const addProspect = async (
  req: Request,
  res: Response
) => {
  try {
    const { userId, companyName, contact } = req.body;
    const prospect = await Prospect.create({ companyName, contact });

    const user = await User.findById(userId);

    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    user.prospects.push(prospect._id);
    await user.save();
    res.status(200).json({ message: "Prospect added successfully", prospect });
    return;
  } catch (error) {
    console.error(error);
    res.status(400).json("Failed to create Prospect");
    return;
  }
};
