import { prisma } from "@/database/database";

async function createCharacter(name: string, species: string, affiliation: string, homePlanetId: number) {
    const create = await prisma.character.create({
        data: {
            name,
            species,
            affiliation,
            homePlanetId
        }
    })
    return create
}

async function findById(id: number) {
    const find = await prisma.character.findFirst({
        where: {
            id
        }
    })
    return find
}

async function findAllCharacters() {
    return await prisma.character.findMany()
}

async function updateCharacter(id: number, name: string, species: string, affiliation: string, homePlanetId: number) {
    const update = await prisma.character.update({
        where: {
            id: id,
        },
        data: {
            ...(name && { name }),
            ...(species && { species }),
            ...(affiliation && { affiliation }),
            ...(homePlanetId && { homePlanetId })
        }
    })
    return update
}
async function deleteCharacter(id: number) {
    const delet = await prisma.character.delete({
        where: {
            id
        }
    })
    return delet
}


const characterRepository = {
    createCharacter,
    findAllCharacters,
    findById,
    updateCharacter,
    deleteCharacter
}
export default characterRepository