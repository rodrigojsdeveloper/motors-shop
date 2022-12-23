import { listAllProductsService } from "../../services/products/listAllProducts.service";
import { Request, Response } from "express";

const listAllProductsController = async (req: Request, res: Response) => {

    const products = await listAllProductsService()
    
    return res.json(products)
}

export { listAllProductsController }
