import { prisma } from "@/database/database";

async function createPlanet(name:string, climate:string, terrain:string, starSystemId:number) {
    const create = await prisma.planet.create({
        data:{
            name,
            climate,
            terrain,
            starSystemId
        }
    })
    return create
}

async function findAll() {
    return await prisma.planet.findMany({
    })
}

async function findById(id:number) {
    return await prisma.planet.findFirst({
        where:{
            id
        }
    })
}
async function updatePlanet(id: number, name: string, climate: string, terrain: string, starSystemId: number) {
    const update = await prisma.character.update({
        where: {
            id: id,
        },
        data: {
            ...(name && { name }),
            ...(climate && { climate }),
            ...(terrain && { terrain }),
            ...(starSystemId && { starSystemId })
        }
    })
    return update
}

const planetsRepositories = {
    createPlanet,
    findAll,
    findById,
    updatePlanet
}

export default planetsRepositories

