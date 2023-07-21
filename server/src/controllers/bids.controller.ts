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

  async update(req: Request, res: Response) {
    const id: string = req.params.id;

    const data: Partial<IBid> = req.body;

    const updatedBid = await new BidsServices().update(data, id);

    return res.json(updatedBid);
  }

  async delete(req: Request, res: Response) {
    const id: string = req.params.id;

    await new BidsServices().delete(id);

    return res.status(204).json();
  }
}

export { BidsControllers };
