import { BidsServices } from "../services/bids.service";
import { IBid } from "../interfaces/bid.interface";
import { Request, Response } from "express";

class BidsControllers {
  async create(req: Request, res: Response) {
    const email: string = req.email;

    const auction_id: string = req.params.auction_id;

    const data: IBid = req.body;

    const newBid = await new BidsServices().create(data, email, auction_id);

    return res.status(201).json(newBid);
  }

  async listBidsAuction(req: Request, res: Response) {
    const auction_id: string = req.params.auction_id;

    const bids = await new BidsServices().listBidsAuction(auction_id);

    return res.json(bids);
  }
}

export { BidsControllers };
