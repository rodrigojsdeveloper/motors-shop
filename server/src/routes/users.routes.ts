import { Router } from "express";

import {
  createUserController,
  listProductsUserController,
  listUsersController,
  profileController,
  specificUserWithEmailController,
  updateUserController,
} from "../controllers/users.controller";

import { schemaValidationMiddleware } from "../middlewares/schemaValidation.middleware";
import { tokenMiddleware } from "../middlewares/token.middleware";

import { userSchema } from "../schemas/user.schema";

const routes = Router();

const usersRoutes = (): Router => {
  routes.post(
    "/signup",
    schemaValidationMiddleware(userSchema),
    createUserController
  );

  routes.get("", listUsersController);

  routes.get("/profile", tokenMiddleware, profileController);

  routes.get("/products/:id", listProductsUserController);

  routes.patch("/:id", tokenMiddleware, updateUserController);

  routes.get("/email/:email", specificUserWithEmailController);

  return routes;
};

const profileRoutes = (): Router => {

  return routes;
};

export { usersRoutes, profileRoutes };
