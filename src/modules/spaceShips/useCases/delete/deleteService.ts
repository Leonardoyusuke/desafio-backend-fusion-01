import { NotFoundError } from "@/helpers/errors/apiErrors";
import spaceShipRepositorie from "../../repositories/spaceShipRepositories";

export default async function deleteSpaceShipService(id:number) {
    const find = await spaceShipRepositorie.findById(id)
    if(find===null) throw new NotFoundError("Not Found")

    const delet = await spaceShipRepositorie.delet(id)
    return delet
    
}