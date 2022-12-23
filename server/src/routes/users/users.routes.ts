import { Router } from "express"

import { listProductsUserController } from "../../controllers/users/listProductsUser.controller"
import { createUserController } from "../../controllers/users/createUser.controller"
import { updateUserController } from "../../controllers/users/updateUser.controller"

import { tokenMiddleware } from "../../middlewares/token.middleware"


const routes = Router()

const usersRoutes = () => {

    routes.post("/signup", createUserController)

    routes.get("/:id", tokenMiddleware, listProductsUserController)

    routes.patch("/:id", tokenMiddleware, updateUserController)

    return routes
}

export { usersRoutes }
