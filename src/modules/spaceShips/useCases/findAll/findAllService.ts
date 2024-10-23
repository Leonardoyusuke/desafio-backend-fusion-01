import spaceShipRepositorie from "../../repositories/spaceShipRepositories";

export default async function findAllSpaceShipService() {
    const all = await spaceShipRepositorie.findAll()
    return all
}