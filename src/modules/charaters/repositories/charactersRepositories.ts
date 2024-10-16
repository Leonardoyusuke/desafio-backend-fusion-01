import { prisma } from "@/database/database";
import { characterCreate } from "@/helpers/interfaces/characterCreate";

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


const characterRepository = {
    createCharacter,
    findAllCharacters,
    findById
}
export default characterRepository