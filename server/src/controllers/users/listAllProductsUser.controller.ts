import { listAllProductsUserService } from "../../services/users/listAllProductsUser.service";
import { Request, Response } from "express";

const listAllProductsUserController = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  const listProducts = await listAllProductsUserService(id);

  return res.json(listProducts);
};

export { listAllProductsUserController };
