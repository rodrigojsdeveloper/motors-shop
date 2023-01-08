import { Router } from "express";

import {
  listAuctionsController,
  specificAuctionController,
} from "../controllers/auctions.controller";

const routes = Router();

const auctionsRoutes = (): Router => {
  routes.get("", listAuctionsController);

  routes.get("/:id", specificAuctionController);

  return routes;
};

export { auctionsRoutes };
