import { Request, Response } from "express";
import { deleteStarSystemService } from "./deleteService";
import { BadRequest } from "@/helpers/errors/apiErrors";

export default async function deleteStarSystemController(req: Request, res: Response):Promise<any> {
    const id = parseInt(req.params.id)
    try {
        const deleteStarSystem = await deleteStarSystemService(id)
        console.log(deleteStarSystem)
        return res.status(200).json(deleteStarSystem)
    } catch (error) {
        if (error instanceof BadRequest) {
            return res.status(error.statusCode).send(error.message);
        }
        return res.sendStatus(500);
    }

}