import { Request, Response } from "express";
import updatePlanetService from "./updateService";
import { NotFoundError } from "@/helpers/errors/apiErrors";

export default async function updatePlanetController(req: Request, res: Response): Promise<any> {
    const id = parseInt(req.params.id)
    const { name, climate, terrain, starSystemId } = req.body
    try {
        const update = await updatePlanetService(id, name, climate, terrain, starSystemId)
        return update
    } catch (error) {
        if (error instanceof NotFoundError) {
            return res.status(error.statusCode).send(error.message);
        }
        return res.sendStatus(500);
    }
}
