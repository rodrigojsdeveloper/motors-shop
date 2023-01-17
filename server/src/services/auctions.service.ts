import { auctionRepository } from "../repositories/auction.repository";
import { NotFoundError } from "../errors/notFound.error";
import { Auction } from "../entities/auction.entity";

class AuctionsServices {
  async listAll(): Promise<ReadonlyArray<Auction>> {
    const auctions = await auctionRepository.find({
      relations: ["bids", "user"],
    });

    return auctions;
  }

  async specific(auction_id: string): Promise<Auction> {
    const auction = await auctionRepository.findOne({
      where: { id: auction_id },
      relations: ["product", "user"],
    });

    if (!auction) {
      throw new NotFoundError("Auction");
    }

    return auction;
  }
}

export { AuctionsServices };
