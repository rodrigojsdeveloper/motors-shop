import {
  listAuctionsService,
  specificAuctionService,
} from "../services/auctions.service";
import { Request, Response } from "express";

const listAuctionsController = async (req: Request, res: Response) => {
  const auctions = await listAuctionsService();

  return res.json(auctions);
};

const specificAuctionController = async (req: Request, res: Response) => {
  const auction_id: string = req.params.auction_id;

  const auction = await specificAuctionService(auction_id);

  return res.json(auction);
};

export { listAuctionsController, specificAuctionController };
