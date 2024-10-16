import { Request, Response } from "express";
import updateCharacterService from "./updateService";
import { NotFoundError } from "@/helpers/errors/apiErrors";

export default async function updateCharacterController(req: Request, res: Response):Promise<any> {
    const id = parseInt(req.params.id)
    const { name, speciesId, affiliationId, homePlanetId } = req.body;
    try {
        const update = await updateCharacterService(id, name, speciesId, affiliationId, homePlanetId)
        return res.status(200).json(update)
    } catch (error) {
        if (error instanceof NotFoundError) {
            return res.status(error.statusCode).send(error.message);
        }
        return res.sendStatus(500);
    }


}