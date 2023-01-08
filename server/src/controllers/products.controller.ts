import {
  createProductService,
  listProductsService,
  specificProductService,
  updateProductService,
  deleteProductService,
} from "../services/products.service";
import { IProduct } from "../interfaces/product.interface";
import { Request, Response } from "express";

const createProductController = async (req: Request, res: Response) => {
  const email: string = req.email;

  const data: IProduct = req.body;

  const newProduct = await createProductService(data, email);

  return res.status(201).json(newProduct);
};

const listProductsController = async (req: Request, res: Response) => {
  const products = await listProductsService();

  return res.json(products);
};

const specificProductController = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  const specificProduct = await specificProductService(id);

  return res.json(specificProduct);
};

const updateProductController = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  const data: Partial<IProduct> = req.body;

  const updatedProduct = await updateProductService(data, id);

  return res.json(updatedProduct);
};

const deleteProductController = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  await deleteProductService(id);

  return res.status(204).json();
};

export {
  createProductController,
  listProductsController,
  specificProductController,
  updateProductController,
  deleteProductController,
};
