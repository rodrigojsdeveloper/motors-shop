import { Router } from "express";

import { listAllAuctionsController } from "../../controllers/auctions/listAllAuctions.controller";
import { createAuctionController } from "../../controllers/auctions/createAuction.controller";

import { tokenMiddleware } from "../../middlewares/token.middleware";


const routes = Router()

const auctionsRoutes = () => {

    routes.post("", tokenMiddleware, createAuctionController)

    routes.get("", tokenMiddleware, listAllAuctionsController)

    return routes
}

export { auctionsRoutes }
