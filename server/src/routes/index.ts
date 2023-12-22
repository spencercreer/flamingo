import { Router } from "express";
import userRoutes from "./userRoutes";
import prospectRoutes from "./prospectRoutes";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/prospect", prospectRoutes);

export default routes;