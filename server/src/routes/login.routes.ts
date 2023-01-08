import { Router } from "express";

import { loginController } from "../controllers/login.controller";

const routes = Router();

const loginRoutes = (): Router => {
  routes.post("", loginController);

  return routes;
};

export { loginRoutes };
