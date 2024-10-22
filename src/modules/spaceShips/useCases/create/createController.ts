import { NextFunction, Request, Response } from "express";
import CreateSpaceShipService from "./createService";
import { BadRequest } from "@/helpers/errors/apiErrors";

export default async function CreateSpaceShipController(req: Request, res: Response):Promise<any> {
    const { name, model, manufacturer, passengerCapacity } = req.body
    try {
        const create = await CreateSpaceShipService(name,model,manufacturer,passengerCapacity)
        return res.status(201).json("Created")
    } catch (error) {
        if (error instanceof BadRequest) {
            return res.status(error.statusCode).send(error.message);
        }
        return res.sendStatus(500); 
    }
}