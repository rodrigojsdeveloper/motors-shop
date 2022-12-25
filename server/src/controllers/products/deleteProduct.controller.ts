import { Request, Response } from "express";
import { deleteProductService } from "services/products/deleteProduct.service";

const deleteProductController = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  await deleteProductService(id);

  return res.status(204).json();
};

export { deleteProductController };
