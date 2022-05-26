import express from "express";
import { body, validationResult } from "express-validator";
import User from "../models/user";

const router = express.Router();

router.post(
  "/signup",
  body("email").isEmail().withMessage("Invalid Email"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be atleast 6 chars long"),
  async (req, res) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      const errors = validationErrors.array().map((error) => {
        return {
          msg: error.msg,
        };
      });
      return res.json({
        errors,
      });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return res.json({
        errors: [
          {
            msg: "Email already in use.",
          },
        ],
        data: null,
      });
    }
    res.send("user");
  }
);

export default router;
