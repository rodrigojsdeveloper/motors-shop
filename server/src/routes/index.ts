import { Express } from "express"

import { productsRoutes } from "./products/products.routes"
import { usersRoutes } from "./users/users.routes"
import { loginRoutes } from "./login/login.routes"

const appRoutes = (app: Express) => {

    app.use("/users", usersRoutes())
    app.use("/signin", loginRoutes())
    app.use("/products", productsRoutes())
}

export { appRoutes }
