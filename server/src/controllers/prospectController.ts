import { Request, Response } from "express";
import Prospect from "../models/prospect";
import User from "../models/user";

export const createProspect = async (req: Request, res: Response) => {
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
  } catch (error) {
    console.error(error);
    res.status(400).json("Failed to create Prospect");
  }
};

export const getProspect = async (req: Request, res: Response) => {
  try {
    const prospectId = req.params.id;

    const prospect = await Prospect.findById(prospectId);

    if (!prospect) {
      res.status(404).json({ error: "Prospect not found" });
      return;
    }

    res.status(200).json(prospect);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve the prospect." });
  }
};

export const updateProspect = async (req: Request, res: Response) => {
  try {
    const prospectId = req.params.id;
    const updatedDocument = await Prospect.findByIdAndUpdate(
      prospectId,
      req.body,
      { new: true }
    );

    if (!updatedDocument) {
      return res.status(404).json({ error: "Document not found" });
    }

    return res.status(200).json(updatedDocument);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
