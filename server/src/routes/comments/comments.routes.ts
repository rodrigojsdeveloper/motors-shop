import { Router } from "express";

import { listAllCommentsController } from "../../controllers/comments/listAllComments.controller";
import { createCommentController } from "../../controllers/comments/createComment.controller";

import { tokenMiddleware } from "../../middlewares/token.middleware";


const routes = Router()

const commentsRoutes = () => {

    routes.post("/:product_id", tokenMiddleware, createCommentController)

    routes.get("", tokenMiddleware, listAllCommentsController)
    
    return routes
}

export { commentsRoutes }
