import { Router } from "express";

import * as UserController from "../../controllers/UserController/UserController";

const middlewareAuth = require("../../controllers/UserController/middlewares/auth");

const UserRouter = Router();

UserRouter.get("/", middlewareAuth, UserController.index); //só entra se tiver autenticado
UserRouter.post("/register", UserController.create);
UserRouter.post("/auth", UserController.auth);

export default UserRouter;
