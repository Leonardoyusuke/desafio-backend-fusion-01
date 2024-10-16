import { BadRequest } from "@/helpers/errors/apiErrors";
import characterRepository from "../../repositories/charactersRepositories";
import jwt from "jsonwebtoken";

export default async function createCharacterService(name: string, speciesId: number, affiliationId: number, homePlanetId: number) {
    const create = await characterRepository.createCharacter(name, speciesId, affiliationId, homePlanetId)
    if (!create) throw new BadRequest("Bad Request")
        console.log("aqui")

    const token = jwt.sign(
        {
            id: create.id,
            name: create.name,
        },
        process.env.SECRET_JWT as string 
    );

    //Falta parte de buscar pelos nome e transformar em ID
    return token
}