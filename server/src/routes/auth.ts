import express from "express";
import { body, validationResult } from "express-validator";

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
    res.json({
      email,
      password,
    });
    res.send("sign up");
  }
);

export default router;
