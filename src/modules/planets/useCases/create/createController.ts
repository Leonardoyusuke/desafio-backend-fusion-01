import { Request, Response } from "express";
import createPlanetService from "./createService";
import { BadRequest } from "@/helpers/errors/apiErrors";

export default async function createPlanetController(req: Request, res: Response):Promise<any> {
    const { name, climate, terrain, starSystemId } = req.body
    try {
        const create = await createPlanetService(name, climate, terrain, starSystemId)
        return res.status(201).json(create)
    } catch (error) {
        if (error instanceof BadRequest) {
            return res.status(error.statusCode).send(error.message);
        }
        return res.sendStatus(500); 
    }

}