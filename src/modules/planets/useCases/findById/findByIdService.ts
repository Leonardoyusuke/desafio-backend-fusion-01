import { NotFoundError } from "@/helpers/errors/apiErrors";
import planetsRepositories from "../../repositories/planetsRepositories";

export async function findByIdService(id:number) {
    const find = await planetsRepositories.findById(id)
    if(find===null) throw new NotFoundError("Not Found")
    return find
}