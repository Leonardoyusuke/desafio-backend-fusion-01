import { authValidation } from "@/middlewares/authMiddlewares";
import { validateSchema } from "@/middlewares/schemaValidator";
import { createStarSystemSchemaJoi, updateStarSystemSchemaJoi } from "@/modules/solar-systems/schemas/starSystemSchema";
import createStarSystemController from "@/modules/solar-systems/useCases/create/createController";
import deleteStarSystemController from "@/modules/solar-systems/useCases/delete/deleteController";
import findAllcontroller from "@/modules/solar-systems/useCases/findAll/findAllController";
import findByIdController from "@/modules/solar-systems/useCases/findById/findByIdController";
import { updateStarSystemsController } from "@/modules/solar-systems/useCases/update/updateController";

import { Router } from "express";

const starSystemRouters = Router()

starSystemRouters.post('/',authValidation, validateSchema(createStarSystemSchemaJoi),createStarSystemController)
starSystemRouters.get('/', findAllcontroller)
starSystemRouters.get('/:id',findByIdController)
starSystemRouters.put('/:id',authValidation,validateSchema(updateStarSystemSchemaJoi), updateStarSystemsController)
starSystemRouters.delete('/:id',authValidation,deleteStarSystemController)


export default starSystemRouters