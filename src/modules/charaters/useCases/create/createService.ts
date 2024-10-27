import { BadRequest } from "@/helpers/errors/apiErrors";
import characterRepository from "../../repositories/charactersRepositories";
import jwt from "jsonwebtoken";

export default async function createCharacterService(name: string, species: string, affiliationId: number, homePlanetId: number) {
    const create = await characterRepository.createCharacter(name, species, affiliationId, homePlanetId)
    if (!create) throw new BadRequest("Bad Request")

    const token = jwt.sign(
        {
            id: create.id,
            name: create.name,
        },
        process.env.SECRET_JWT as string 
    );

    return token
}