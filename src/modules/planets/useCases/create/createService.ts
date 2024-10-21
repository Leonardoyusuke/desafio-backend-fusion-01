import { BadRequest } from "@/helpers/errors/apiErrors";
import planetsRepositories from "../../repositories/planetsRepositories";

export default async function createPlanetService(name:string,climate:string,terrain:string,starSystemId:number) {
    const create = await planetsRepositories.createPlanet(name, climate, terrain, starSystemId)
    if(!create) throw new BadRequest("Bad Request")
    return create
}


