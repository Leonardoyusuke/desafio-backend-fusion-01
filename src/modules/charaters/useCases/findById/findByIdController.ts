import { Request, Response } from "express";
import findByIdCharacterService from "./findByIdService";
import { NotFoundError } from "@/helpers/errors/apiErrors";

export default async function findByIdCharacterController(req:Request, res:Response):Promise<any> {
    const id = parseInt(req.params.id)
    try {
        const findById = await findByIdCharacterService(id)
        return res.status(200).json(findById)
    } catch (error) {
        if (error instanceof NotFoundError) {
            return res.status(error.statusCode).send(error.message);
        }
        return res.sendStatus(500);
    }
    
}