import { BadRequest } from "@/helpers/errors/apiErrors";
import characterRepository from "../../repositories/charactersRepositories";

export default async function deleteCharacterService(id:number) {
    const deleteCharacter = await characterRepository.deleteCharacter(id)
    if(!deleteCharacter) throw new BadRequest("Bad Request")
    return deleteCharacter
    
}