import { Router } from "express";

import { listProductsUserController } from "../../controllers/users/listProductsUser.controller";
import { viewProfileController } from "../../controllers/users/viewProfile.controller";
import { createUserController } from "../../controllers/users/createUser.controller";
import { updateUserController } from "../../controllers/users/updateUser.controller";

import { schemaValidationMiddleware } from "../../middlewares/schemaValidation.middleware";
import { tokenMiddleware } from "../../middlewares/token.middleware";

import { userSchema } from "../../schemas/user.schemas";

const routes = Router();

const usersRoutes = () => {
  routes.post(
    "/signup",
    schemaValidationMiddleware(userSchema),
    createUserController
  );

  routes.get("/:id", tokenMiddleware, listProductsUserController);

  routes.patch("/:id", tokenMiddleware, updateUserController);

  return routes;
};

const profileRoutes = () => {

  routes.get("", tokenMiddleware, viewProfileController);

  return routes
}

export { usersRoutes, profileRoutes };
