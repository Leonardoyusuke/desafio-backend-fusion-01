import { Request, Response } from "express";
import { findAllService } from "./findAllservice";

export default async function findAllcontroller(req:Request, res:Response):Promise<any> {
    try {
        const findAll = await findAllService()
        return res.status(200).json(findAll)
    } catch (error) {
        return res.sendStatus(500);
    }
    
}