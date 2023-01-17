import { AuctionsServices } from "../services/auctions.service";
import { Request, Response } from "express";

class AuctionControllers {
  async listAll(req: Request, res: Response) {
    const auctions = await new AuctionsServices().listAll();

    return res.json(auctions);
  }

  async specific(req: Request, res: Response) {
    const auction_id: string = req.params.auction_id;

    const auction = await new AuctionsServices().specific(auction_id);

    return res.json(auction);
  }
}

export { AuctionControllers };
