import { Request, Response } from "express";
import { IBid } from "interfaces/bids";
import { createBidService } from "services/bids/createBid.service";

const createBidController = async (req: Request, res: Response) => {
  const email: string = req.email;

  const auction_id: string = req.params.id;

  const data: IBid = req.body;

  const newBid = await createBidService(data, email, auction_id);

  return res.status(201).json(newBid);
};

export { createBidController };
