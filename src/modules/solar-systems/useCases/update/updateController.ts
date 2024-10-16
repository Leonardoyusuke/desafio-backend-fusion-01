import { Request,Response } from "express";
import updateStarSystemsService from "./updateService";

export async function updateStarSystemsController(req:Request, res:Response):Promise<any> {
    const id = parseInt(req.params.id)
    const { name, description } = req.body;
    try {
        const update = await updateStarSystemsService(id,name,description)
        return res.status(200).json(update)
    } catch (error) {
        
    }
    
}