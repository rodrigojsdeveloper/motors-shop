import { Product } from "../entities/product.entity";
import { AppDataSource } from "../data-source";
import { Repository } from "typeorm";

const productRepository: Repository<Product> =
  AppDataSource.getRepository(Product);

export { productRepository };
