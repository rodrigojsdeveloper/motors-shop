import { Router } from "express";

import { CommentsControllers } from "../controllers/comments.controller";

import { schemaValidationMiddleware } from "../middlewares/schemaValidation.middleware";
import { tokenMiddleware } from "../middlewares/token.middleware";

import { commentSchema } from "../schemas/comment.schema";

const routes = Router();

const commentsRoutes = (): Router => {
  routes.post(
    "/:product_id",
    schemaValidationMiddleware(commentSchema),
    tokenMiddleware,
    new CommentsControllers().create
  );

  routes.get("/:product_id", new CommentsControllers().listCommentsProduct);

  return routes;
};

export { commentsRoutes };
