import { Router } from "express"

import { createUserController } from "../../controllers/users/createUser.controller"
import { updateUserController } from "../../controllers/users/updateUser.controller"


const routes = Router()

const usersRoutes = () => {

    routes.post("", createUserController)

    routes.patch("/:id", updateUserController)

    return routes
}

export { usersRoutes }
