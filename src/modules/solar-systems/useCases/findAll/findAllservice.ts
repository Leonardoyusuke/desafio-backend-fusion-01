import starSystemRepository from "../../repositories/starSystemRepositories";

export async function findAllService() {
    const findAll = await starSystemRepository.getStarSystems()
    return findAll
}