import { Router, Response, NextFunction } from "express";
import { ProspectController } from "../controllers";

const userRoutes = Router();

userRoutes.route("/").post(ProspectController.createProspect);

userRoutes
  .route("/:id")
  .get(ProspectController.getProspect)
  .put(ProspectController.updateProspect);

export default userRoutes;
