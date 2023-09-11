import { UsersService } from "../services/users.service";
import { IUser } from "../interfaces/user.interface";
import { Request, Response } from "express";

class UsersController {
  async create(req: Request, res: Response) {
    const data: IUser = req.body;

    const newUser = await new UsersService().create(data);

    return res.status(201).json(newUser);
  }

  async listAll(req: Request, res: Response) {
    const users = await new UsersService().listAll();

    return res.json(users);
  }

  async listProductsUser(req: Request, res: Response) {
    const id: string = req.params.id;

    const listProducts = await new UsersService().listProductsUser(id);

    return res.json(listProducts);
  }

  async profile(req: Request, res: Response) {
    const email: string = req.email;

    const profile = await new UsersService().profile(email);

    return res.json(profile);
  }

  async update(req: Request, res: Response) {
    const id: string = req.params.id;

    const data: Partial<IUser> = req.body;

    const updatedUser = await new UsersService().update(data, id);

    return res.json(updatedUser);
  }

  async specificUserWithEmail(req: Request, res: Response) {
    const email: string = req.params.email;

    const user = await new UsersService().specificUserWithEmail(email);

    return res.json(user);
  }
}

export { UsersController };
