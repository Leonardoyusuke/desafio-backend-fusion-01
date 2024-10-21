import { BadRequest, NotFoundError } from "@/helpers/errors/apiErrors";
import planetsRepositories from "../../repositories/planetsRepositories";

export default async function updatePlanetService(id: number, name: string, climate: string, terrain: string, starSystemId:number) {
    const planet = await planetsRepositories.findById(id)
    if(planet===null) throw new NotFoundError("Not Found")
    const update = await planetsRepositories.updatePlanet(id, name, climate, terrain, starSystemId)
    return update    
    
}