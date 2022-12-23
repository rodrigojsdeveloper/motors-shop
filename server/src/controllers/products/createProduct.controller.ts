import { createProductService } from "../../services/products/createProduct.service";
import { IProduct } from "../../interfaces/products";
import { Request, Response } from "express";

const createProductController = async (req: Request, res: Response) => {

    const data: IProduct = req.body
    
    const newProduct = await createProductService(data)

    return res.status(201).json(newProduct)
}

export { createProductController }
