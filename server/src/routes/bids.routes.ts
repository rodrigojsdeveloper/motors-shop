import { Router } from "express";

import {
  createBidController,
  listBidsAuctionController,
} from "../controllers/bids.controller";

import { schemaValidationMiddleware } from "../middlewares/schemaValidation.middleware";
import { tokenMiddleware } from "../middlewares/token.middleware";

import { bidSchema } from "../schemas/bid.schema";

const routes = Router();

const bidsRoutes = (): Router => {
  routes.post(
    "/:auction_id",
    schemaValidationMiddleware(bidSchema),
    tokenMiddleware,
    createBidController
  );

  routes.get("/:auction_id", listBidsAuctionController);

  return routes;
};

export { bidsRoutes };
