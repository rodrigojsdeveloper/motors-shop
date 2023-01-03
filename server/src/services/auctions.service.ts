import { auctionRepository } from "../repositories/auction.repository";
import { Auction } from "../entities/auction.entity";

class AuctionsServices {
  async list(): Promise<ReadonlyArray<Auction>> {
    const auctions = await auctionRepository.find({
      relations: ["product", "bids"],
    });

    return auctions;
  }
}

export { AuctionsServices };
