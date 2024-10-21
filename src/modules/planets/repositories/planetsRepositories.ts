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

const planetsRepositories = {
    createPlanet,
    findAll
}

export default planetsRepositories

