import { Router } from "express";

import * as UserController from "../../controllers/UserController/UserController";

const middlewareAuth = require("../../controllers/UserController/middlewares/auth");

const UserRouter = Router();

UserRouter.get("/user", middlewareAuth, UserController.index); //só entra se tiver autenticado
UserRouter.post("/user/register", UserController.create);
UserRouter.post("/user/auth", UserController.auth);

export default UserRouter;
