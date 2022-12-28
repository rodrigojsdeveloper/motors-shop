import { AppDataSource } from "../data-source";
import { Bid } from "../entities/bids";
import { Repository } from "typeorm";

const bidRepository: Repository<Bid> = AppDataSource.getRepository(Bid);

export { bidRepository };
