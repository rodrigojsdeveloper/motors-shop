import { createBidService, listBidsAuctionService } from "../services/bids.service";
import { IBid } from "../interfaces/bid.interface";
import { Request, Response } from "express";

const createBidController = async (req: Request, res: Response) => {
  const email: string = req.email;

  const auction_id: string = req.params.auction_id;

  const data: IBid = req.body;

  const newBid = await createBidService(data, email, auction_id);

  return res.status(201).json(newBid);
};

const listBidsAuctionController = async (req: Request, res: Response) => {
  const auction_id: string = req.params.auction_id;

  const bids = await listBidsAuctionService(auction_id);

  return res.json(bids);
};

export { createBidController, listBidsAuctionController };
