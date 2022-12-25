import { deleteProductService } from "../../services/products/deleteProduct.service";
import { Request, Response } from "express";

const deleteProductController = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  await deleteProductService(id);

  return res.status(204).json();
};

export { deleteProductController };
