import { handleErrorMiddleware } from "./middlewares/handleError.middleware"
import { appRoutes } from "./routes"
import "express-async-error"
import express from "express"

const app = express()
app.use(express.json())

appRoutes(app)

app.use(handleErrorMiddleware)

export { app }
