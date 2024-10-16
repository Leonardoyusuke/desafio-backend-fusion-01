import { BadRequest, NotFoundError } from "@/helpers/errors/apiErrors";
import characterRepository from "../../repositories/charactersRepositories";

export default async function findByIdCharacterService(id:number) {
    const character = await characterRepository.findById(id)
    if(character===null) throw new NotFoundError("Not Found")
    return character
    
}