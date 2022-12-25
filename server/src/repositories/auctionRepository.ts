import { AppDataSource } from "data-source";
import { Auction } from "entities/auctions";

const auctionRepository = AppDataSource.getRepository(Auction);

export { auctionRepository };
