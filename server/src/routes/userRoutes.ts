import { Router } from "express";
// import authController from "../../controllers/authControllers";
import { UserController } from "../controllers";

const userRoutes = Router();

userRoutes.get("/", () => {
    console.log("getall users")
})

userRoutes.get("/:id", () => {
    console.log("get one user users")
})

userRoutes.post("/signup", UserController.signUp);

userRoutes.post("/login", UserController.login);

export default userRoutes;
