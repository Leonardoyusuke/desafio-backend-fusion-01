import { Request, Response } from "express";
import { findByIdtarSystemService } from "./findByIdService";
import { BadRequest } from "@/helpers/errors/apiErrors";

export default async function findByIdController(req: Request, res: Response): Promise<any> {
    const id = parseInt(req.params.id)
    try {
        const get = await findByIdtarSystemService(id)
        return res.status(200).json(get)
    } catch (error) {
        if (error instanceof BadRequest) {
            return res.status(error.statusCode).send(error.message);
        }
        return res.sendStatus(500);
    }

}
