import { BadRequest } from "@/helpers/errors/apiErrors"
import starSystemRepository from "../../repositories/starSystemRepositories"

export async function deleteStarSystemService(id:number) {
    const deleteStarSystem = await starSystemRepository.deleteStarSystem(id)
    if(!deleteStarSystem) throw new BadRequest("Bad Request")
    return deleteStarSystem
}