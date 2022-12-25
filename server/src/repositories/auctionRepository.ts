import { Auction } from "../entities/auctions";
import { AppDataSource } from "../data-source";

const auctionRepository = AppDataSource.getRepository(Auction);

export { auctionRepository };
