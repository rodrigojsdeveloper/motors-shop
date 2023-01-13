import { Router } from "express";

import {
  createCommentController,
  listCommentsProductController,
} from "../controllers/comments.controller";

import { schemaValidationMiddleware } from "../middlewares/schemaValidation.middleware";
import { tokenMiddleware } from "../middlewares/token.middleware";

import { commentSchema } from "../schemas/comment.schema";

const routes = Router();

const commentsRoutes = (): Router => {
  routes.post(
    "/:product_id",
    schemaValidationMiddleware(commentSchema),
    tokenMiddleware,
    createCommentController
  );

  routes.get("/:product_id", listCommentsProductController);

  return routes;
};

export { commentsRoutes };
