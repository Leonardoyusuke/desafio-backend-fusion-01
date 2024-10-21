import { NotFoundError } from "@/helpers/errors/apiErrors";
import planetsRepositories from "../../repositories/planetsRepositories";

export default async function deletePlanetService(id:number) {
    const planet = await planetsRepositories.findById(id)
    if(planet===null) throw new NotFoundError("Not Found")
    
    const deletePlanet = await planetsRepositories.delet(id)
    return deletePlanet
}