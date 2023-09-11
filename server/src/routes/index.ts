import { Express } from "express";

import { commentsRoutes } from "./comments.routes";
import { productsRoutes } from "./products.routes";
import { usersRoutes } from "./users.routes";
import { loginRoutes } from "./login.routes";
import { termsRoutes } from "./terms.routes";

import SwaggerDocs from "../../docs/swagger.json";
import SwaggerUi from "swagger-ui-express";

const appRoutes = (app: Express, endPoint: string): void => {
  app.use(`/${endPoint}/products`, productsRoutes());
  app.use(`/${endPoint}/comments`, commentsRoutes());
  app.use(`/${endPoint}/signin`, loginRoutes());
  app.use(`/${endPoint}/users`, usersRoutes());
  app.use(`/${endPoint}/terms`, termsRoutes());
  app.use(`/${endPoint}/docs`, SwaggerUi.serve, SwaggerUi.setup(SwaggerDocs));
};

export { appRoutes };
