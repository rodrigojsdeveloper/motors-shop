import { Router } from "express";

import {
  createBidController,
  listBidsController,
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

  routes.get("", tokenMiddleware, listBidsController);

  return routes;
};

export { bidsRoutes };
