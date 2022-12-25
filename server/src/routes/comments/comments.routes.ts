import { Router } from "express";

import { listAllCommentsController } from "controllers/comments/listAllComments.controller";
import { createCommentController } from "controllers/comments/createComment.controller";

import { schemaValidationMiddleware } from "middlewares/schemaValidation.middleware";
import { tokenMiddleware } from "middlewares/token.middleware";

import { commentSchema } from "schemas/comment.schemas";

const routes = Router();

const commentsRoutes = () => {
  routes.post(
    "/:product_id",
    schemaValidationMiddleware(commentSchema),
    tokenMiddleware,
    createCommentController
  );

  routes.get("", tokenMiddleware, listAllCommentsController);

  return routes;
};

export { commentsRoutes };
