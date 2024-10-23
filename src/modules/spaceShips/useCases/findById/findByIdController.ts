import { Request, Response } from "express";
import findByIdSpaceShipService from "./findByIdService";
import { BadRequest } from "@/helpers/errors/apiErrors";

export default async function findByIdSpaceShipController(req: Request, res: Response): Promise<any> {
    const id = parseInt(req.params.id)
    try {
        const find = await findByIdSpaceShipService(id)
        return res.status(201).json(find)
    } catch (error) {
        if (error instanceof BadRequest) {
            return res.status(error.statusCode).send(error.message);
        }
        return res.sendStatus(500); 
    }
}