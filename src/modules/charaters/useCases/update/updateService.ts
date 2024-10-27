import { NotFoundError } from "@/helpers/errors/apiErrors";
import characterRepository from "../../repositories/charactersRepositories";

export default async function updateCharacterService(id: number, name: string, species: string, affiliation:string , homePlanetId:number) {
const character = await characterRepository.findById(id)
if(character===null) throw new NotFoundError("Not Found")
    const update = await characterRepository.updateCharacter(id, name, species, affiliation , homePlanetId)
    return update
    
}