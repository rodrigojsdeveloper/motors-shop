import { updateUserService } from "services/users/updateUser.service";
import { IUserUpdate } from "interfaces/users";
import { Request, Response } from "express";

const updateUserController = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  const data: IUserUpdate = req.body;

  const updatedUser = await updateUserService(data, id);

  return res.json(updatedUser);
};

export { updateUserController };
