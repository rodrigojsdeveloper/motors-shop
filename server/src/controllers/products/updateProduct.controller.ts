import { updateProductService } from "../../services/products/updateProduct.service";
import { IProductUpdate } from "../../interfaces/products";
import { Request, Response } from "express";

const updateProductController = async (req: Request, res: Response) => {

    const id: string = req.params.id

    const data: IProductUpdate = req.body

    const updatedProduct = await updateProductService(data, id)

    return res.json(updatedProduct)
}

export { updateProductController }
