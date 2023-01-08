import {
  createCommentService,
  listCommentsService,
} from "../services/comments.service";
import { IComment } from "../interfaces/comment.interface";
import { Request, Response } from "express";

const createCommentController = async (req: Request, res: Response) => {
  const email: string = req.email;

  const id: string = req.params.id;

  const data: IComment = req.body;

  const newComment = await createCommentService(data, email, id);

  return res.status(201).json(newComment);
};

const listCommentsController = async (req: Request, res: Response) => {
  const comments = await listCommentsService();

  return res.json(comments);
};

export { createCommentController, listCommentsController };
