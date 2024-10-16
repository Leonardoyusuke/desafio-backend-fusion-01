import { BadRequest } from "@/helpers/errors/apiErrors";
import starSystemRepository from "../../repositories/starSystemRepositories";

export async function findByIdtarSystemService(id:number) {
    const get = await starSystemRepository.findById(id)
    if(!get) throw new BadRequest("Bad Request")
    return get
}