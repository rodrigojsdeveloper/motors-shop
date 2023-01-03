import { CommentsServices } from "../services/comments.service";
import { IComment } from "../interfaces/comment.interface";
import { Request, Response } from "express";

class CommentsControllers {
  async create(req: Request, res: Response) {
    const email: string = req.email;

    const id: string = req.params.id;

    const data: IComment = req.body;

    const newComment = await new CommentsServices().create(data, email, id);

    return res.status(201).json(newComment);
  }

  async list(req: Request, res: Response) {
    const comments = await new CommentsServices().list();

    return res.json(comments);
  }
}

export { CommentsControllers };
