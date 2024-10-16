import starSystemRepository from "../../repositories/starSystemRepositories";

export default async function updateStarSystemsService(id:number, name:string, description:string) {
    const update = await starSystemRepository.updateStarSystems(id, name, description)
    return update

}

