import { Product } from "../entities/products";
import { AppDataSource } from "../data-source";
import { Repository } from "typeorm";

const productRepository: Repository<Product> = AppDataSource.getRepository(Product);

export { productRepository };
