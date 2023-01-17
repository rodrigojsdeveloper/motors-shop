import { UsersServices } from "../services/users.service";
import { IUser } from "../interfaces/user.interface";
import { Request, Response } from "express";

class UsersControllers {
  async create(req: Request, res: Response) {
    const data: IUser = req.body;

    const newUser = await new UsersServices().create(data);

    return res.status(201).json(newUser);
  }

  async listAll(req: Request, res: Response) {
    const users = await new UsersServices().listAll();

    return res.json(users);
  }

  async listProductsUser(req: Request, res: Response) {
    const id: string = req.params.id;

    const listProducts = await new UsersServices().listProductsUser(id);

    return res.json(listProducts);
  }

  async profile(req: Request, res: Response) {
    const email: string = req.email;

    const profile = await new UsersServices().profile(email);

    return res.json(profile);
  }

  async update(req: Request, res: Response) {
    const id: string = req.params.id;

    const data: Partial<IUser> = req.body;

    const updatedUser = await new UsersServices().update(data, id);

    return res.json(updatedUser);
  }

  async specificUserWithEmail(req: Request, res: Response) {
    const email: string = req.params.email;

    const user = await new UsersServices().specificUserWithEmail(email);

    return res.json(user);
  }
}

export { UsersControllers };
