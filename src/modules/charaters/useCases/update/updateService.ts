import characterRepository from "../../repositories/charactersRepositories";

export default async function updateCharacterService(id: number, name: string, speciesId: number, affiliationId:number , homePlanetId:number) {
    const update = await characterRepository.updateCharacter(id, name, speciesId, affiliationId , homePlanetId)
    return update
    
}