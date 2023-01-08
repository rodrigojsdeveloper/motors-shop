import { auctionRepository } from "../repositories/auction.repository";
import { productRepository } from "../repositories/product.repository";
import { userRepository } from "../repositories/user.repository";
import { IProduct } from "../interfaces/product.interface";
import { NotFoundError } from "../errors/notFound.error";
import { Auction } from "../entities/auction.entity";
import { Product } from "../entities/product.entity";

const createProductService = async (
  product: IProduct,
  email: string
): Promise<Product | Auction> => {
  const user = await userRepository.findOneBy({ email });

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

const listProductsService = async (): Promise<ReadonlyArray<Product>> => {
  const products = await productRepository.find({
    relations: ["user", "comments"],
  });

  return products;
};

const specificProductService = async (id: string): Promise<Product> => {
  const product = await productRepository.findOne({
    where: { id },
    relations: ["comments", "user"],
  });

  if (!product) {
    throw new NotFoundError("Product");
  }

  return product;
};

const updateProductService = async (
  product: Partial<IProduct>,
  id: string
): Promise<Product> => {
  const findProduct = await productRepository.findOneBy({ id });

  if (!findProduct) {
    throw new NotFoundError("Product");
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
};

const deleteProductService = async (id: string): Promise<void> => {
  const product = await productRepository.findOneBy({ id });

  if (!product) {
    throw new NotFoundError("Product");
  }

  await productRepository.delete(product.id);
};

export {
  createProductService,
  listProductsService,
  specificProductService,
  updateProductService,
  deleteProductService,
};
