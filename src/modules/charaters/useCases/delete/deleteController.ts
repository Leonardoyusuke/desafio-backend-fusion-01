import { Request, Response } from "express";
import deleteCharacterService from "./deleteService";
import { BadRequest } from "@/helpers/errors/apiErrors";

export default async function deleteCharacterController(req:Request, res:Response):Promise<any> {
    const id = parseInt(req.params.id)
    try {
        const deleteCharacter = await deleteCharacterService(id)
        return res.status(204).json(deleteCharacter.name)
    } catch (error) {
        if (error instanceof BadRequest) {
            return res.status(error.statusCode).send(error.message);
        }
        return res.sendStatus(500);
    }
    
}
