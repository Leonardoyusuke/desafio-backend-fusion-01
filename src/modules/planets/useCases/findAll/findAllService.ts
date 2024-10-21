import planetsRepositories from "../../repositories/planetsRepositories";

export default async function findAllPlanetsService() {
    return await planetsRepositories.findAll()

    
}


