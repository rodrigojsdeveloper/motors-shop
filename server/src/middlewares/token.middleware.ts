import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

const tokenMiddleware = (req: Request, res: Response, next: NextFunction) => {

    let token = req.headers.authorization

    if(!token || !token.includes("Bearer")) {

        return res.status(401).json({ message: "Invalid token" })
    }

    token = token.split(" ")[1]

    verify(token, process.env.SECRET_KEY as string, (error: any, decoded: any) => {

        if(error) {

            return res.status(401).json({ message: "Invalid token" })
        }

        req.email = decoded.email

        return next()
    })
}

export { tokenMiddleware }
