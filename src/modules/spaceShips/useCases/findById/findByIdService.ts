import { NotFoundError } from "@/helpers/errors/apiErrors";
import spaceShipRepositorie from "../../repositories/spaceShipRepositories";

export default async function findByIdSpaceShipService(id:number) {
    const findById = await spaceShipRepositorie.findById(id)
    if(findById===null) throw new NotFoundError("Not Found")
    return findById
}