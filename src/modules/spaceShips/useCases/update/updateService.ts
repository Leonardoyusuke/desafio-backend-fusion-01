import { NotFoundError } from "@/helpers/errors/apiErrors";
import spaceShipRepositorie from "../../repositories/spaceShipRepositories";

export default async function updateSpaceShipService(id: number, name: string, model: string, manufacturer: string, passengerCapacity: number) {
    const find = await spaceShipRepositorie.findById(id)
    if(find===null) throw new NotFoundError("Not found")

    const update = await spaceShipRepositorie.update(id, name, model, manufacturer, passengerCapacity)
    return update
}