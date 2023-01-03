import { IProduct, IProductUpdate } from "../interfaces/product.interface";
import { auctionRepository } from "../repositories/auctionRepository";
import { productRepository } from "../repositories/productRepository";
import { useRepository } from "../repositories/userRepository";
import { Auction } from "../entities/auction.entity";
import { Product } from "../entities/product.entity";
import { NotFoundError } from "../helpers";

class ProductsServices {
  async create(product: IProduct, email: string): Promise<Product | Auction> {
    const user = await useRepository.findOneBy({ email });

    const newProduct = new Product();
    newProduct.title = product.title;
    newProduct.description = product.description;
    newProduct.year = product.year;
    newProduct.kilometers = product.kilometers;
    newProduct.ad_type = product.ad_type;
    newProduct.price = product.price;
    newProduct.vehicle_type = product.vehicle_type;
    newProduct.cover_image = product.cover_image;
    newProduct.gallery_image = product.gallery_image;
    newProduct.comments = [];
    newProduct.user = user!;

    productRepository.create(newProduct);
    await productRepository.save(newProduct);

    if ((newProduct.ad_type = "auction")) {
      const newAuction = new Auction();
      newAuction.product = newProduct;
      newAuction.bids = [];
      newAuction.time_limit = "1:00:00";

      auctionRepository.create(newAuction);
      await auctionRepository.save(newAuction);

      return newAuction;
    }

    return newProduct;
  }

  async list(): Promise<ReadonlyArray<Product>> {
    const products = await productRepository.find({
      relations: ["user", "comments"],
    });

    return products;
  }

  async specific(id: string): Promise<Product> {
    const product = await productRepository.findOne({
      where: { id },
      relations: ["comments", "user"],
    });

    if (!product) {
      throw new NotFoundError("Product not found");
    }

    return product;
  }

  async update(product: IProductUpdate, id: string): Promise<Product> {
    const findProduct = await productRepository.findOneBy({ id });

    if (!findProduct) {
      throw new NotFoundError("Product not found");
    }

    await productRepository.update(findProduct.id, {
      title: product.title ? product.title : findProduct.title,
      description: product.description
        ? product.description
        : findProduct.description,
      year: product.year ? product.year : findProduct.year,
      kilometers: product.kilometers
        ? product.kilometers
        : findProduct.kilometers,
      ad_type: product.ad_type ? product.ad_type : findProduct.ad_type,
      price: product.price ? product.price : findProduct.price,
      vehicle_type: product.vehicle_type
        ? product.vehicle_type
        : findProduct.vehicle_type,
      cover_image: product.cover_image
        ? product.cover_image
        : findProduct.cover_image,
      gallery_image: product.gallery_image
        ? product.gallery_image
        : findProduct.gallery_image,
    });

    const updatedProduct = await productRepository.findOneBy({
      id: findProduct.id,
    });

    return updatedProduct!;
  }

  async delete(id: string): Promise<void> {
    const product = await productRepository.findOneBy({ id });

    if (!product) {
      throw new NotFoundError("Product not found");
    }

    await productRepository.delete(product.id);
  }
}

export { ProductsServices };
