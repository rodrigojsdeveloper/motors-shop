import { CommentsService } from "../services/comments.service";
import { IComment } from "../interfaces/comment.interface";
import { Request, Response } from "express";

class CommentsController {
  async create(req: Request, res: Response) {
    const email: string = req.email;

    const product_id: string = req.params.product_id;

    const data: IComment = req.body;

    const newComment = await new CommentsService().create(
      data,
      email,
      product_id
    );

    return res.status(201).json(newComment);
  }

  async listCommentsProduct(req: Request, res: Response) {
    const product_id: string = req.params.product_id;

    const comments = await new CommentsService().listCommentsProduct(
      product_id
    );

    return res.json(comments);
  }

  async specific(req: Request, res: Response) {
    const id: string = req.params.id;

    const specificComment = await new CommentsService().specific(id);

    return res.json(specificComment);
  }

  async update(req: Request, res: Response) {
    const id: string = req.params.id;

    const data: Partial<IComment> = req.body;

    const updatedComment = await new CommentsService().update(data, id);

    return res.json(updatedComment);
  }

  async delete(req: Request, res: Response) {
    const id: string = req.params.id;

    await new CommentsService().delete(id);

    return res.status(204).json();
  }
}

export { CommentsController };
