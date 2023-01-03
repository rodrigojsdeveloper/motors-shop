import { Express } from "express";

import { profileRoutes, usersRoutes } from "./users.routes";
import { productsRoutes } from "./products/products.routes";
import { commentsRoutes } from "./comments/comments.routes";
import { auctionsRoutes } from "./auctions/auctions.routes";
import { loginRoutes } from "./login/login.routes";
import { bidsRoutes } from "./bids/bids.routes";

const appRoutes = (app: Express): void => {
  app.use("/bids", bidsRoutes());
  app.use("/users", usersRoutes());
  app.use("/signin", loginRoutes());
  app.use("/products", productsRoutes());
  app.use("/comments", commentsRoutes());
  app.use("/auctions", auctionsRoutes());
  app.use("/profile", profileRoutes());
};

export { appRoutes };
