import { viewProfileService } from "../../services/users/viewProfile.service";
import { Request, Response } from "express";

const viewProfileController = async (req: Request, res: Response) => {
  const email: string = req.email;

  const profile = await viewProfileService(email);

  return res.json(profile);
};

export { viewProfileController };
