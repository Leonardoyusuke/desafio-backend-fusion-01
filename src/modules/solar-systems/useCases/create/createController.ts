import { Request, Response } from "express";
import createStarSystemService from "./createService";
import { BadRequest, Conflict } from "@/helpers/errors/apiErrors";

export default async function createStarSystemController(req: Request, res: Response): Promise<any> {
    const { name, description } = req.body;
    try {
        const create = await createStarSystemService(name, description);
        if (create) return res.status(201).json(create)
    } catch (error) {
        if (error instanceof BadRequest) {
            return res.status(error.statusCode).send(error.message);
        }
        if (error instanceof Conflict) {
            return res.status(error.statusCode).send(error.message);
        }
        return res.sendStatus(500);
    }

}