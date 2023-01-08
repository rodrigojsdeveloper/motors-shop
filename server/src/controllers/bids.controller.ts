import { createBidService, listBidsService } from "../services/bids.service";
import { IBid } from "../interfaces/bid.interface";
import { Request, Response } from "express";

const createBidController = async (req: Request, res: Response) => {
  const email: string = req.email;

  const auction_id: string = req.params.id;

  const data: IBid = req.body;

  const newBid = await createBidService(data, email, auction_id);

  return res.status(201).json(newBid);
};

const listBidsController = async (req: Request, res: Response) => {
  const bids = await listBidsService();

  return res.json(bids);
};

export { createBidController, listBidsController };
