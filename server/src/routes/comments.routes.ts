import { Router } from "express";

import { CommentsController } from "../controllers/comments.controller";

import { schemaValidationMiddleware } from "../middlewares/schemaValidation.middleware";
import { tokenMiddleware } from "../middlewares/token.middleware";

import { commentSchema } from "../schemas/comment.schema";

const routes = Router();

const commentsRoutes = (): Router => {
  routes.post(
    "/:product_id",
    schemaValidationMiddleware(commentSchema),
    tokenMiddleware,
    new CommentsController().create
  );

  routes.get("/:product_id", new CommentsController().listCommentsProduct);

  routes.get("/specific/:id", tokenMiddleware, new CommentsController().specific);

  routes.patch("/:id", tokenMiddleware, new CommentsController().update);

  routes.delete("/:id", tokenMiddleware, new CommentsController().delete);

  return routes;
};

export { commentsRoutes };
