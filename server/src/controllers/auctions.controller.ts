import { AuctionsServices } from "../services/auctions.service";
import { Request, Response } from "express";

class AuctionsControllers {
  async list(req: Request, res: Response) {
    const auctions = await new AuctionsServices().list();

    return res.json(auctions);
  }
}

export { AuctionsControllers };
