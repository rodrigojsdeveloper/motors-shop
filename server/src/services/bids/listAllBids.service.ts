import { bidRepository } from "../../repositories/bidRepository";
import { Bid } from "../../entities/bids";

const listAllBidsService = async (): Promise<Bid[]> => {
  const bids = await bidRepository.find();

  return bids;
};

export { listAllBidsService };
