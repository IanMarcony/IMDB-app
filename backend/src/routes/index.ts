import { Router, Response, Request } from "express";

import UserRouter from "./UserRouter";

const routes = Router();

routes.use("/users", UserRouter);

routes.get("/", (req: Request, res: Response) => {
  return res.status(200).send({ message: "Main Route" });
});

export default routes;
