import { BadRequest } from "@/helpers/errors/apiErrors";
import spaceShipRepositorie from "../../repositories/spaceShipRepositories";

export default async function CreateSpaceShipService(name: string, model: string, manufacturer: string, passengerCapacity: number) {
    const create = await spaceShipRepositorie.createSpaceShip(name, model, manufacturer, passengerCapacity)
    if(!create) throw new BadRequest("Bad Request")
    return create
}