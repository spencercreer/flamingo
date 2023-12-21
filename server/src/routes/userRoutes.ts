import { Router } from "express";
import { UserController } from "../controllers";

const userRoutes = Router();

userRoutes.get("/", UserController.getAllUsers)

userRoutes.get("/:id", () => {
    // TODO
})

userRoutes.post("/signup", UserController.signUp);

userRoutes.post("/login", UserController.login);

userRoutes.put("/score", UserController.addScore)

export default userRoutes;
