import { listAllUsersService } from "../../services/users/listAllUsers.service";
import { Request, Response } from "express";

const listAllUsersController = async (req: Request, res: Response) => {
  const users = await listAllUsersService();

  return res.json(users);
};

export { listAllUsersController };
