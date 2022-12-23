import { productRepository } from "../../repositories/productRepository"

const listAllProductsService = async () => {

    const users = await productRepository.find()

    return users
}

export { listAllProductsService }
