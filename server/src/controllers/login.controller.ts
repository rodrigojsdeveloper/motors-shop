import { LoginService } from "../services/login.service";
import { ILogin } from "../interfaces/login.interface";
import { Request, Response } from "express";

class LoginController {
  async login(req: Request, res: Response) {
    const data: ILogin = req.body;

    const token = await new LoginService().login(data);

    return res.json(token);
  }
}

export { LoginController };
