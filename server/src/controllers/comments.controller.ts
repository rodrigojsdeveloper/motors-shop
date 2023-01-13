import {
  createCommentService,
  listCommentsProductService,
} from "../services/comments.service";
import { IComment } from "../interfaces/comment.interface";
import { Request, Response } from "express";

const createCommentController = async (req: Request, res: Response) => {
  const email: string = req.email;

  const product_id: string = req.params.product_id;

  const data: IComment = req.body;

  const newComment = await createCommentService(data, email, product_id);

  return res.status(201).json(newComment);
};

const listCommentsProductController = async (req: Request, res: Response) => {
  const product_id: string = req.params.product_id;

  const comments = await listCommentsProductService(product_id);

  return res.json(comments);
};

export { createCommentController, listCommentsProductController };
