import { listAllCommentsService } from "services/comments/listAllComments.service";
import { Request, Response } from "express";

const listAllCommentsController = async (req: Request, res: Response) => {
  const comments = await listAllCommentsService();

  return res.json(comments);
};

export { listAllCommentsController };
