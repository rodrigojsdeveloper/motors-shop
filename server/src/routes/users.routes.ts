import { Router } from "express";

import {
  createUserController,
  listProductsUserController,
  listUsersController,
  specificUserWithEmailController,
  updateUserController,
} from "../controllers/users.controller";

import { schemaValidationMiddleware } from "../middlewares/schemaValidation.middleware";
import { tokenMiddleware } from "../middlewares/token.middleware";

import { userSchema } from "../schemas/user.schema";
import { profileService } from "../services/users.service";

const routes = Router();

const usersRoutes = (): Router => {
  routes.post(
    "/signup",
    schemaValidationMiddleware(userSchema),
    createUserController
  );

  routes.get("", listUsersController);

  routes.get("/:id", tokenMiddleware, listProductsUserController);

  routes.patch("/:id", tokenMiddleware, updateUserController);

  routes.get("/email/:email", specificUserWithEmailController);

  return routes;
};

const profileRoutes = (): Router => {
  routes.get("", tokenMiddleware, profileService);

  return routes;
};

export { usersRoutes, profileRoutes };
