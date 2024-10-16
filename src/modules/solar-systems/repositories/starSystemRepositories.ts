import { prisma } from "@/database/database";
import { Prisma } from "@prisma/client";

async function createStarSystem(name: string, description: string) {
    const create = await prisma.starSystem.create({
        data: {
            name,
            description
        },
    });
    return create;
}
async function findByName(name: string) {
    const find = await prisma.starSystem.findFirst({
        where: {
            name
        }
    });
    return find;
}

async function findById(id: number) {
    const find = await prisma.starSystem.findFirst({
        where: {
            id
        },
        include: {
            planets: true
        }
    });
    return find;
}

async function getStarSystems() {
    return await prisma.starSystem.findMany()
}

async function updateStarSystems(id: number, name: string, description: string) {
    const update = await prisma.starSystem.update({
        where: {
            id: id,
        },
        data: {
            ...(name && { name }),
            ...(description && { description }),
        }
    })
    return update
}
async function deleteStarSystem(id: number) {
    try {
        const delet = await prisma.starSystem.delete({
            where: {
                id
            }
        })
        return delet
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
            return null;
        }
        throw error;
    }

}


const starSystemRepository = {
    createStarSystem,
    findByName,
    findById,
    getStarSystems,
    updateStarSystems,
    deleteStarSystem
};

export default starSystemRepository