import {
  createUserService,
  listUsersService,
  listProductsUserService,
  profileService,
  updateUserService,
  specificUserWithEmailService
} from "../services/users.service";
import { IUser } from "../interfaces/user.interface";
import { Request, Response } from "express";

const createUserController = async (req: Request, res: Response) => {
  const data: IUser = req.body;

  const newUser = await createUserService(data);

  return res.status(201).json(newUser);
};

const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsersService();

  return res.json(users);
};

const listProductsUserController = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  const listProducts = await listProductsUserService(id);

  return res.json(listProducts);
};

const profileController = async (req: Request, res: Response) => {
  const email: string = req.email;

  const profile = await profileService(email);

  return res.json(profile);
};

const updateUserController = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  const data: Partial<IUser> = req.body;

  const updatedUser = await updateUserService(data, id);

  return res.json(updatedUser);
};

const specificUserWithEmailController = async (req: Request, res: Response) => {

  const email = req.params.email

  const user = await specificUserWithEmailService(email)

  return res.json(user)
}

export {
  createUserController,
  listUsersController,
  listProductsUserController,
  profileController,
  updateUserController,
  specificUserWithEmailController
};
