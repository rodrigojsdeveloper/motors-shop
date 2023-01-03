import { Router } from "express";

import { AuctionsControllers } from "../controllers/auctions.controller";

const routes = Router();

const auctionsRoutes = (): Router => {
  routes.get("", new AuctionsControllers().list);

  return routes;
};

export { auctionsRoutes };
