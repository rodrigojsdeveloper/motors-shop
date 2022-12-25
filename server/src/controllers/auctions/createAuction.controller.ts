import { createAuctionService } from "services/auctions/createAuction.service";
import { IAuction } from "interfaces/auctions";
import { Request, Response } from "express";

const createAuctionController = async (req: Request, res: Response) => {
  const email: string = req.email;

  const data: IAuction = req.body;

  const newAuction = await createAuctionService(data, email);

  return res.status(201).json(newAuction);
};

export { createAuctionController };
