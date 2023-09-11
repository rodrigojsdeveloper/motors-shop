import { Router } from "express";

import { UsersController } from "../controllers/users.controller";

import { schemaValidationMiddleware } from "../middlewares/schemaValidation.middleware";
import { tokenMiddleware } from "../middlewares/token.middleware";

import { userSchema } from "../schemas/user.schema";

const routes = Router();

const usersRoutes = (): Router => {
  routes.post(
    "/signup",
    schemaValidationMiddleware(userSchema),
    new UsersController().create
  );

  routes.get("", new UsersController().listAll);

  routes.get("/profile", tokenMiddleware, new UsersController().profile);

  routes.get("/products/:id", new UsersController().listProductsUser);

  routes.patch("/:id", tokenMiddleware, new UsersController().update);

  routes.get("/email/:email", new UsersController().specificUserWithEmail);

  return routes;
};

export { usersRoutes };
