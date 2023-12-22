import { Router, Response, NextFunction } from "express";
import { ProspectController } from "../controllers";

const userRoutes = Router();

userRoutes.route("/")
    .get(ProspectController.getAllProspects)
    .post(ProspectController.addProspect)

userRoutes.get("/:id", () => {
    // TODO
})

export default userRoutes;
