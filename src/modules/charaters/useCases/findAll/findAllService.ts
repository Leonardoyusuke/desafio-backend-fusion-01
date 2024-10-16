import characterRepository from "../../repositories/charactersRepositories";

export default async function findAllCharacterService() {
    return await characterRepository.findAllCharacters()

    
}