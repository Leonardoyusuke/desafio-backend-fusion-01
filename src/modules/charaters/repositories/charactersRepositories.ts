import { prisma } from "@/database/database";

async function createCharacter(name:string, speciesId:number, affiliationId:number, homePlanetId:number) {
    const create = await prisma.character.create({
        data:{
            name,
            speciesId,
            affiliationId,
            homePlanetId
        }
    })
    return create
}

async function findById(id:number) {
    const find = await prisma.character.findFirst({
        where:{
            id
        }
    })
    return find
}

async function findAllCharacters() {
    return await prisma.character.findMany()
}

async function updateCharacter(id: number, name: string, speciesId: number, affiliationId:number , homePlanetId:number) {
    const update = await prisma.character.update({
        where: {
            id: id,
        },
        data: {
            ...(name && { name }),
            ...(speciesId && { speciesId }),
            ...(affiliationId && {affiliationId}),
            ...(homePlanetId && {homePlanetId})
        }
    })
    return update
}


const characterRepository = {
    createCharacter,
    findAllCharacters,
    findById,
    updateCharacter
}
export default characterRepository