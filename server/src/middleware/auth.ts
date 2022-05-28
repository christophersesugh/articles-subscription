import { Request, Response, NextFunction } from "express";
import JWT from "jsonwebtoken";
const secret = "sijkdfsmkcdmkmksdmkmksdk";

// const secret = process.env.JWT_SECRET as string;
export const auth = async (req: Request, res: Response, next: NextFunction) => {
  let token = req.header("authorization");
  if (!token) {
    return res.status(403).json({
      message: "Unauthorized",
    });
  }
  token = token.split(" ")[1];
  try {
    const user = JWT.verify(token, secret) as {
      email: string;
    };
    req.user = user.email;
    next();
  } catch (error) {
    console.log(error);

    return res.status(403).json({
      message: "Unauthorized",
    });
  }
};
