import { auctionRepository } from "../repositories/auctionRepository";
import { useRepository } from "../repositories/userRepository";
import { bidRepository } from "../repositories/bidRepository";
import { IBid } from "../interfaces/bid.interface";
import { Bid } from "../entities/bid.entity";
import { NotFoundError } from "../helpers";

class BidsServices {
  async create(bid: IBid, email: string, auction_id: string): Promise<Bid> {
    const user = await useRepository.findOneBy({ email });

    const auction = await auctionRepository.findOneBy({ id: auction_id });

    if (!auction) {
      throw new NotFoundError("Auction not found");
    }

    const newBid = new Bid();
    newBid.value = bid.value;
    newBid.auction = auction;
    newBid.user = user!;

    bidRepository.create(newBid);
    await bidRepository.save(newBid);

    return newBid;
  }

  async list(): Promise<ReadonlyArray<Bid>> {
    const bids = await bidRepository.find({
      relations: ["user", "auction"],
    });

    return bids;
  }
}

export { BidsServices };
