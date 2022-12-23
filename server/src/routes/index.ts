import { usersRoutes } from "./users/users.routes"
import { Express } from "express"

const appRoutes = (app: Express) => {

    app.use("/users", usersRoutes())
}

export { appRoutes }
