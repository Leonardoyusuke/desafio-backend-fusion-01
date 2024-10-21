import { NotFoundError } from "@/helpers/errors/apiErrors";
import deleteCharacterService from "@/modules/charaters/useCases/delete/deleteService";
import { Request, Response } from "express";

export default async function deletePlanetController(req:Request, res:Response):Promise<any> {
    const id = parseInt(req.params.id)
    try {
        const delet = await deleteCharacterService(id)
        return res.send(201).json("Deleted")
    } catch (error) {
        if (error instanceof NotFoundError) {
            return res.status(error.statusCode).send(error.message);
        }
        return res.sendStatus(500);
    }
    
}