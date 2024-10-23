import { Request, Response } from "express";
import findAllSpaceShipService from "./findAllService";
import { BadRequest } from "@/helpers/errors/apiErrors";

export default async function findAllSpaceShipsController(req: Request, res: Response): Promise<any> {
    try {
        const find = await findAllSpaceShipService()
        return res.status(201).json(find)
    } catch (error) {
        if (error instanceof BadRequest) {
            return res.status(error.statusCode).send(error.message);
        }
        return res.sendStatus(500); 
    }

}