import { Product } from "entities/products"
import { NotFoundError } from "helpers"
import { productRepository } from "repositories/productRepository"

const specificProductService = async (id: string): Promise<Product> => {

    const product = await productRepository.findOne({ where: { id }, relations: [ "comments", "user" ] })

    if(!product) {

        throw new NotFoundError("Product not found")
    }

    return product
}

export { specificProductService }
