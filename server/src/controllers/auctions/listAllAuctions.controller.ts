import { listAllAuctionsService } from "services/auctions/listAllAuctions.service";
import { Request, Response } from "express";

const listAllAuctionsController = async (req: Request, res: Response) => {
  const auctions = await listAllAuctionsService();

  return res.json(auctions);
};

export { listAllAuctionsController };
