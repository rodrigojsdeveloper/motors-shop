import { Router } from "express";

import { LoginControllers } from "../controllers/login.controller";

const routes = Router();

const loginRoutes = (): Router => {
  routes.post("", new LoginControllers().login);

  return routes;
};

export { loginRoutes };
