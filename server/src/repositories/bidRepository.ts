import { AppDataSource } from "data-source";
import { Bid } from "entities/bids";

const bidRepository = AppDataSource.getRepository(Bid);

export { bidRepository };
