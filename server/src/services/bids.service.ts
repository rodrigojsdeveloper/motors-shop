import { auctionRepository } from "../repositories/auction.repository";
import { userRepository } from "../repositories/user.repository";
import { bidRepository } from "../repositories/bid.repository";
import { NotFoundError } from "../errors/notFound.error";
import { IBid } from "../interfaces/bid.interface";
import { Bid } from "../entities/bid.entity";

class BidsServices {
  async create(bid: IBid, email: string, auction_id: string): Promise<Bid> {
    const user = await userRepository.findOneBy({ email });

    const auction = await auctionRepository.findOneBy({ id: auction_id });

    if (!auction) {
      throw new NotFoundError("Auction");
    }

    const newBid = new Bid();
    newBid.value = bid.value;
    newBid.auction = auction;
    newBid.user = user!;

    bidRepository.create(newBid);
    await bidRepository.save(newBid);

    return newBid;
  }

  async listBidsAuction(auction_id: string): Promise<ReadonlyArray<Bid>> {
    const auction = await auctionRepository.findOne({
      where: { id: auction_id },
      relations: ["bids"],
    });

    const bids = await bidRepository.find({ relations: ["user", "auction"] });

    if (!auction) {
      throw new NotFoundError("Auction");
    }

    return bids.filter((bid) => bid.auction.id == auction.id);
  }

  async update(comment: Partial<IBid>, id: string): Promise<Bid> {
    const findBid = await bidRepository.findOneBy({ id });

    if (!findBid) {
      throw new NotFoundError("Comment");
    }

    await bidRepository.update(findBid.id, {
      value: comment.value ? comment.value : findBid.value,
    });

    const updatedBid = await bidRepository.findOneBy({
      id: findBid.id,
    });

    return updatedBid!;
  }

  async delete(id: string): Promise<void> {
    const findBid = await bidRepository.findOneBy({ id });

    if (!findBid) {
      throw new NotFoundError("Comment");
    }

    await bidRepository.delete(findBid.id);
  }
}

export { BidsServices };
