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

async function findAll() {
    const find = await prisma.spaceship.findMany({
    })
    return find
}

async function findById(id: number) {
    const find = await prisma.spaceship.findFirst({
        where: {
            id
        }
    })
    return find
}
async function update(id: number, name: string, model: string, manufacturer: string, passengerCapacity: number) {
    const update = await prisma.spaceship.update({
        where:{
            id
        },
        data:{

            ...(name && { name }),
            ...(model && { model }),
            ...(manufacturer && { manufacturer }),
            ...(passengerCapacity && { passengerCapacity })
        }
    })
}

const spaceShipRepositorie = {
    createSpaceShip,
    findAll,
    findById,
    update
}

export default spaceShipRepositorie