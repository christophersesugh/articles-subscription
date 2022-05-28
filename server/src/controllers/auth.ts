import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user";

const secret = "sijkdfsmkcdmkmksdmkmksdk";

export const login = async (req: express.Request, res: express.Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(500).json({
        message: "Invalid credentials",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(500).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        email: user.email,
      },
      secret,

      { expiresIn: 60 * 60 }
    );

    return res.status(200).json({
      data: {
        token,
        user: {
          id: user._id,
          email: user.email,
        },
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occured",
    });
  }
};

export const register = async (req: express.Request, res: express.Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(500).json({
        message: "User already exist",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    if (password.length < 6) {
      return res.status(500).json({
        message: "Password must be 6 characters.",
      });
    }
    const newUser = await User.create({
      email,
      password: hashedPassword,
    });
    const token = jwt.sign(
      {
        email: newUser.email,
      },
      secret,

      { expiresIn: "1hr" }
    );
    res.status(201).json({
      data: {
        token,
        user: {
          id: newUser._id,
          email: newUser.email,
        },
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occured",
    });
  }
};

export const me = async (req: express.Request, res: express.Response) => {
  const user = await User.findOne({ email: req.user });
  if (!user) {
    return res.status(500).json({
      error: {
        message: "Unauthoized",
      },
    });
  }
  return res.status(200).json({
    user: {
      id: user._id,
      email: user.email,
    },
  });
};
