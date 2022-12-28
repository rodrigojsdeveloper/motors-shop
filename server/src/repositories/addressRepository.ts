import { AppDataSource } from "../data-source";
import { Address } from "../entities/address";
import { Repository } from "typeorm";

const addressRepository: Repository<Address> = AppDataSource.getRepository(Address);

export { addressRepository };
