import { Request, Response } from "express";
import { findByIdService } from "./findByIdService";
import { NotFoundError } from "@/helpers/errors/apiErrors";

export default async function findByIdController(req:Request, res:Response):Promise<any> {
    const id = parseInt(req.params.id)
    try {
        const findById = await findByIdService(id)
        return res.status(201).json(findById)
    } catch (error) {
        if (error instanceof NotFoundError) {
            return res.status(error.statusCode).send(error.message);
        }
        return res.sendStatus(500);
    }
    
}