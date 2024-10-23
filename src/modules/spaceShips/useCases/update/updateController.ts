import { BadRequest, NotFoundError } from "@/helpers/errors/apiErrors";
import updateCharacterService from "@/modules/charaters/useCases/update/updateService";
import { Request, Response } from "express";

export default async function updateSpaceShipController(req:Request, res:Response): Promise<any> {
    const id = parseInt(req.params.id)
    const { name, model, manufacturer, passengerCapacity} = req.body
    try {
        const update = await updateCharacterService(id, name, model, manufacturer, passengerCapacity)
        return res.status(201).json(update)
    } catch (error) {
        if (error instanceof BadRequest) {
            return res.status(error.statusCode).send(error.message);
        }
        if(error instanceof NotFoundError){
            return res.status(error.statusCode).send(error.message)
        }
        return res.sendStatus(500); 
    }
}