import { Request, Response } from "express";
import findAllPlanetsService from "./findAllService";


export default async function findAllPlanetsController(req:Request, res:Response):Promise<any> {
    try {
        const findAll = findAllPlanetsService()
        res.status(200).json(findAll)
    } catch (error) {
        return res.sendStatus(500); 
    }
}