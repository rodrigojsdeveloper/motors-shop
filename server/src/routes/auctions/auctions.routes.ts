import { Router } from "express";

import { listAllAuctionsController } from "../../controllers/auctions/listAllAuctions.controller";
import { createAuctionController } from "../../controllers/auctions/createAuction.controller";

import { schemaValidationMiddleware } from "../../middlewares/schemaValidation.middleware";
import { tokenMiddleware } from "../../middlewares/token.middleware";

import { auctionSchema } from "../../schemas/auction.schemas";

const routes = Router();

const auctionsRoutes = () => {
  routes.post(
    "",
    schemaValidationMiddleware(auctionSchema),
    tokenMiddleware,
    createAuctionController
  );

  routes.get("", listAllAuctionsController);

  return routes;
};

export { auctionsRoutes };
