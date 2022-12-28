import { specificProductService } from "../../services/products/specificProduct.service";
import { Request, Response } from "express";

const specificProductController = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  const specificProduct = await specificProductService(id);

  return res.json(specificProduct);
};

export { specificProductController };
