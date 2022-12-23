import { useRepository } from "../../repositories/userRepository"
import { Product } from "../../entities/products"

const listProductsUserService = async (id: string): Promise<Product[]> => {

    const user = await useRepository.findOne({ where: { id }, relations: [ "products" ] })

    return user!.products
}

export { listProductsUserService }
