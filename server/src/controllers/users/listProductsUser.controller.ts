import { listProductsUserService } from "services/users/listProductsUser.service";
import { Request, Response } from "express";

const listProductsUserController = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  const listProducts = await listProductsUserService(id);

  return res.json(listProducts);
};

export { listProductsUserController };
