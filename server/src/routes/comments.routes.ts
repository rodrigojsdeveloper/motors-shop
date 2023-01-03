import { Router } from "express";

import { CommentsControllers } from "../controllers/comments.controller";

import { schemaValidationMiddleware } from "../middlewares/schemaValidation.middleware";
import { tokenMiddleware } from "../middlewares/token.middleware";

import { commentSchema } from "../schemas/comment.schemas";

const routes = Router();

const commentsRoutes = (): Router => {
  routes.post(
    "/:product_id",
    schemaValidationMiddleware(commentSchema),
    tokenMiddleware,
    new CommentsControllers().create
  );

  routes.get("", tokenMiddleware, new CommentsControllers().list);

  return routes;
};

export { commentsRoutes };
