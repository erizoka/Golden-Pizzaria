import { Request, Response } from "express";
import { AuthUserService } from "../../services/user/AuthUserService";

class AuthUserController {
    async handle(req: Request, res: Response){
        const {email, password} = req.body

        const authUser = new AuthUserService();

        const auth = await authUser.execute({email, password});

        return res.json(auth);
    }
}

export {AuthUserController}