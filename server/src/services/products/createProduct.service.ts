import { productRepository } from "../../repositories/productRepository";
import { auctionRepository } from "../../repositories/auctionRepository";
import { useRepository } from "../../repositories/userRepository";
import { IProduct } from "../../interfaces/products";
import { Product } from "../../entities/products";
import { Auction } from "../../entities/auctions";

const createProductService = async (
  product: IProduct,
  email: string
): Promise<Product | Auction> => {
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
};

export { createProductService };
