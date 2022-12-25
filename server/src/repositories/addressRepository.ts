import { AppDataSource } from "../data-source";
import { Address } from "../entities/address";

const addressRepository = AppDataSource.getRepository(Address);

export { addressRepository };
