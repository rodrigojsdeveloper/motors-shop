import { Router } from "express";

import { UsersControllers } from "../controllers/users.controller";

import { schemaValidationMiddleware } from "../middlewares/schemaValidation.middleware";
import { tokenMiddleware } from "../middlewares/token.middleware";

import { userSchema } from "../schemas/user.schema";

const routes = Router();

const usersRoutes = (): Router => {
  routes.post(
    "/signup",
    schemaValidationMiddleware(userSchema),
    new UsersControllers().create
  );

  routes.get("", new UsersControllers().listAll);

  routes.get("/profile", tokenMiddleware, new UsersControllers().profile);

  routes.get("/products/:id", new UsersControllers().listProductsUser);

  routes.patch("/:id", tokenMiddleware, new UsersControllers().update);

  routes.get("/email/:email", new UsersControllers().specificUserWithEmail);

  return routes;
};

export { usersRoutes };
