import { BadRequest, Conflict } from "@/helpers/errors/apiErrors";
import starSystemRepository from "../../repositories/starSystemRepositories";

export default async function createStarSystemService(name: string, description: string) {
    const conflictCheck = await starSystemRepository.findByName(name);
    if (conflictCheck !== null) throw new Conflict("Star System Already Exist");

    const create = await starSystemRepository.createStarSystem(name, description);
    console.log(create)
    if (!create) throw new BadRequest("Bad Request");
    return create;
}

