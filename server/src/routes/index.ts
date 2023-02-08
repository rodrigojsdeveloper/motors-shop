import { Express } from "express";

import { auctionsRoutes } from "./auctions.routes";
import { commentsRoutes } from "./comments.routes";
import { productsRoutes } from "./products.routes";
import { usersRoutes } from "./users.routes";
import { loginRoutes } from "./login.routes";
import { termsRoutes } from "./terms.routes";
import { bidsRoutes } from "./bids.routes";

import SwaggerDocs from "../../docs/swagger.json";
import SwaggerUi from "swagger-ui-express";

const appRoutes = (app: Express): void => {
  app.use("/products", productsRoutes());
  app.use("/comments", commentsRoutes());
  app.use("/auctions", auctionsRoutes());
  app.use("/signin", loginRoutes());
  app.use("/users", usersRoutes());
  app.use("/bids", bidsRoutes());
  app.use("/terms", termsRoutes());
  app.use("/docs", SwaggerUi.serve, SwaggerUi.setup(SwaggerDocs));
};

export { appRoutes };
