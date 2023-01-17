import { Router } from "express";

import { BidsControllers } from "../controllers/bids.controller";

import { schemaValidationMiddleware } from "../middlewares/schemaValidation.middleware";
import { tokenMiddleware } from "../middlewares/token.middleware";

import { bidSchema } from "../schemas/bid.schema";

const routes = Router();

const bidsRoutes = (): Router => {
  routes.post(
    "/:auction_id",
    schemaValidationMiddleware(bidSchema),
    tokenMiddleware,
    new BidsControllers().create
  );

  routes.get("/:auction_id", new BidsControllers().listBidsAuction);

  return routes;
};

export { bidsRoutes };
