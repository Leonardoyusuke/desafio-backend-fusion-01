import { prisma } from "@/database/database";

async function createSpaceShip(name: string, model: string, manufacturer: string, passengerCapacity: number) {
    const create = await prisma.spaceship.create({
        data: {
            name, 
            model, 
            manufacturer, 
            passengerCapacity
        }
    })
    return create
}

const spaceShipRepositorie = {
    createSpaceShip
}

export default spaceShipRepositorie