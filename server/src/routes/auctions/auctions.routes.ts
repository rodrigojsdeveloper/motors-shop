import { Router } from "express";

import { listAllAuctionsController } from "../../controllers/auctions/listAllAuctions.controller";

const routes = Router();

const auctionsRoutes = (): Router => {

  routes.get("", listAllAuctionsController);

  return routes;
};

export { auctionsRoutes };
