import { Request, Response } from "express";
import createCharacterService from "./createService";
import { BadRequest } from "@/helpers/errors/apiErrors";

export default async function createCharacterController(req:Request, res:Response):Promise<any> {
    const {name, species, affiliation, homePlanet} = req.body
    try {
        const create = await createCharacterService(name, species, affiliation, homePlanet)
        if(create) return res.status(201).json(create)
    } catch (error) {
        if (error instanceof BadRequest) {
            return res.status(error.statusCode).send(error.message);
        }
        return res.sendStatus(500); 
    }
}