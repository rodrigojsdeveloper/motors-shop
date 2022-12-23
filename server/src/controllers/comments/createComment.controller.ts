import { Request, Response } from "express";
import { IComment } from "../../interfaces/comments";
import { createCommentService } from "../../services/comments/createComment.service";

const createCommentController = async (req: Request, res: Response) => {
    
    const email: string = req.email
    
    const id: string = req.params.id

    const data: IComment = req.body

    const newComment = await createCommentService(data, email, id)

    return res.status(201).json(newComment)
}

export { createCommentController }
