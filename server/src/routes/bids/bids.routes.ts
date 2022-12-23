import { Router } from "express";

import { listAllBidsController } from "../../controllers/bids/listAllBids.controller";
import { createBidController } from "../../controllers/bids/createBid.controller";
import { tokenMiddleware } from "../../middlewares/token.middleware";


const routes = Router()

const bidsRoutes = () => {

    routes.post("/:auction_id", tokenMiddleware, createBidController)

    routes.get("", tokenMiddleware, listAllBidsController)

    return routes
}

export { bidsRoutes }
