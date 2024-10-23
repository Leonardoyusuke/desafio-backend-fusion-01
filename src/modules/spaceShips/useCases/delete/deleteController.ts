import { Request, Response } from "express";
import deleteSpaceShipService from "./deleteService";
import { BadRequest, NotFoundError } from "@/helpers/errors/apiErrors";

export default async function deleteSpaceShipController(req: Request, res: Response): Promise<any> {
    const id = parseInt(req.params.id)
    try {
        const delet = await deleteSpaceShipService(id)
        return res.status(201).json("DELETED")
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