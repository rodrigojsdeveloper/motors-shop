import { auctionRepository } from "repositories/auctionRepository";
import { useRepository } from "repositories/userRepository";
import { IAuction } from "interfaces/auctions";
import { Auction } from "entities/auctions";

const createAuctionService = async (
  auction: IAuction,
  email: string
): Promise<Auction> => {
  const user = await useRepository.findOneBy({ email });

  const newAuction = new Auction();
  newAuction.name = auction.name;
  newAuction.description = auction.description;
  newAuction.year = auction.year;
  newAuction.kilometers = auction.kilometers;
  newAuction.ad_type = auction.ad_type;
  newAuction.price = auction.price;
  newAuction.vehicle_type = auction.vehicle_type;
  newAuction.images = auction.images;
  newAuction.comments = [];
  newAuction.bids = [];
  newAuction.time_limit = auction.time_limit;
  newAuction.user = user!;

  auctionRepository.create(newAuction);
  await auctionRepository.save(newAuction);

  return newAuction;
};

export { createAuctionService };
