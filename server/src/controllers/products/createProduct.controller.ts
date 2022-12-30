import { createProductService } from "../../services/products/createProduct.service";
import { IProduct } from "../../interfaces/product.interface";
import { Request, Response } from "express";

const createProductController = async (req: Request, res: Response) => {
  const email: string = req.email;

  const data: IProduct = req.body;

  const newProduct = await createProductService(data, email);

  return res.status(201).json(newProduct);
};

export { createProductController };
