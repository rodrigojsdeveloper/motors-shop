import { Router } from "express";

import { listAllBidsController } from "../../controllers/bids/listAllBids.controller";
import { createBidController } from "../../controllers/bids/createBid.controller";

import { schemaValidationMiddleware } from "../../middlewares/schemaValidation.middleware";
import { tokenMiddleware } from "../../middlewares/token.middleware";

import { bidSchema } from "../../schemas/bid.schemas";

const routes = Router();

const bidsRoutes = (): Router => {
  routes.post(
    "/:auction_id",
    schemaValidationMiddleware(bidSchema),
    tokenMiddleware,
    createBidController
  );

  routes.get("", tokenMiddleware, listAllBidsController);

  return routes;
};

export { bidsRoutes };
