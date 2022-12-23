import { listAllBidsService } from "../../services/bids/listAllBids.service";
import { Request, Response } from "express";

const listAllBidsController = async (req: Request, res: Response) => {

    const bids = await listAllBidsService()

    return res.json(bids)
}

export { listAllBidsController }
