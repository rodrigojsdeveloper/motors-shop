import { Router } from "express";

import { AuctionControllers } from "../controllers/auctions.controller";

const routes = Router();

const auctionsRoutes = (): Router => {
  routes.get("", new AuctionControllers().listAll);

  routes.get("/:auction_id", new AuctionControllers().specific);

  return routes;
};

export { auctionsRoutes };
