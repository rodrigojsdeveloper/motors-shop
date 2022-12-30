import { AppDataSource } from "../data-source";
import { Bid } from "../entities/bid.entity";
import { Repository } from "typeorm";

const bidRepository: Repository<Bid> = AppDataSource.getRepository(Bid);

export { bidRepository };
