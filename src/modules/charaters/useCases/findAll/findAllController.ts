import { Request, Response } from "express";
import findAllCharacterService from "./findAllService";

export default async function findAllCharactersController(req:Request, res:Response):Promise<any> {
    try {
        const findAll = await findAllCharacterService()
        res.status(200).json(findAll)
    } catch (error) {
        return res.sendStatus(500); 
    }
}