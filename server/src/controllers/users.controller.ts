import { IUser, IUserUpdate } from "../interfaces/user.interface";
import { UsersServices } from "../services/users.service";
import { Request, Response } from "express";

class UsersControllers {
  async create(req: Request, res: Response) {
    const data: IUser = req.body;

    const newUser = await new UsersServices().create(data);

    return res.status(201).json(newUser);
  }

  async list(req: Request, res: Response) {
    const users = await new UsersServices().list();

    return res.json(users);
  }

  async listProducts(req: Request, res: Response) {
    const id: string = req.params.id;

    const listProducts = await new UsersServices().listProducts(id);

    return res.json(listProducts);
  }

  async profile(req: Request, res: Response) {
    const email: string = req.email;

    const profile = await new UsersServices().profile(email);

    return res.json(profile);
  }

  async update(req: Request, res: Response) {
    const id: string = req.params.id;

    const data: IUserUpdate = req.body;

    const updatedUser = await new UsersServices().update(data, id);

    return res.json(updatedUser);
  }
}

export { UsersControllers };
