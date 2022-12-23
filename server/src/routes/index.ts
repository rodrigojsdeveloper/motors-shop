import { Express } from "express"

import { usersRoutes } from "./users/users.routes"
import { loginRoutes } from "./login/login.routes"

const appRoutes = (app: Express) => {

    app.use("/users", usersRoutes())
    app.use("/signin", loginRoutes())
}

export { appRoutes }
