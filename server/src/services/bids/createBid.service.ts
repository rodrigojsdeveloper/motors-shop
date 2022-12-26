import { auctionRepository } from "../../repositories/auctionRepository";
import { useRepository } from "../../repositories/userRepository";
import { bidRepository } from "../../repositories/bidRepository";
import { NotFoundError } from "../../helpers";
import { IBid } from "../../interfaces/bids";
import { Bid } from "../../entities/bids";

const createBidService = async (
  bid: IBid,
  email: string,
  auction_id: string
): Promise<Bid> => {
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
};

export { createBidService };
