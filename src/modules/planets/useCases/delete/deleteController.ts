import { NotFoundError } from "@/helpers/errors/apiErrors";
import deleteCharacterService from "@/modules/charaters/useCases/delete/deleteService";
import { Request, Response } from "express";
import deletePlanetService from "./deleteService";

export default async function deletePlanetController(req:Request, res:Response):Promise<any> {
    const id = parseInt(req.params.id)
    try {
        const delet = await deletePlanetService(id)
        return res.send(204)
    } catch (error) {
        if (error instanceof NotFoundError) {
            return res.status(error.statusCode).send(error.message);
        }
        return res.sendStatus(500);
    }
    
}