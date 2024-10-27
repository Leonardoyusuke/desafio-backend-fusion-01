import { BadRequest, NotFoundError } from "@/helpers/errors/apiErrors";
import characterRepository from "../../repositories/charactersRepositories";
import jwt from "jsonwebtoken";
import planetsRepositories from "@/modules/planets/repositories/planetsRepositories";

export default async function createCharacterService(name: string, species: string, affiliation: string, homePlanet: string) {
    const getPlanet = await planetsRepositories.findByName(homePlanet)
    if(getPlanet===null) throw new NotFoundError("Not Found")
    const create = await characterRepository.createCharacter(name, species, affiliation, getPlanet.id)
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