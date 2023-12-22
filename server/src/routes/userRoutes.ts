import { Router, Response, NextFunction } from "express";
import { UserController } from "../controllers";

const userRoutes = Router();

// Middleware to check if the user is authenticated
const authenticateUser = (req: any, res: Response, next: NextFunction) => {
    if (req.session.user) {
      next();
    } else {
        res.status(401).json({ message: "Unauthorized" });
    }
};

userRoutes.get("/", authenticateUser, UserController.getAllUsers)

userRoutes.get("/:id", () => {
    // TODO
})

userRoutes.post("/signup", UserController.signUp);

userRoutes.post("/login", UserController.login);

export default userRoutes;
