import { Router, Response, NextFunction } from "express";
import { UserController } from "../controllers";

const userRoutes = Router();

// Middleware to check if the user is authenticated
const authenticateUser = (req: any, res: Response, next: NextFunction) => {
  // if (req.session.user) {
  //   next();
  // } else {
  //     res.status(401).json({ message: "Unauthorized" });
  // }
  next();
};

userRoutes
  .route("/")
  .get(authenticateUser, UserController.getAllUsers)
  .post(UserController.signUp);

userRoutes.get("/:id", UserController.getUser);

userRoutes.post("/login", UserController.login);

export default userRoutes;
