import { validateSchema } from "@/middlewares/schemaValidator";
import { authValidation } from "@/middlewares/authMiddlewares";
import { Router } from "express";
import { planetSchema, updatePlanetSchema } from "@/modules/planets/schemas/planetSchema";
import createPlanetController from "@/modules/planets/useCases/create/createController";
import findAllPlanetsController from "@/modules/planets/useCases/findAll/findAllController";
import findByIdController from "@/modules/planets/useCases/findById/findByIdController";
import updateCharacterController from "@/modules/charaters/useCases/update/updateController";

const planetsRouter = Router()

planetsRouter.post('/', validateSchema(planetSchema), createPlanetController)
planetsRouter.get('/', findAllPlanetsController)
planetsRouter.get('/:id', findByIdController)
planetsRouter.put('/:id', authValidation, validateSchema(updatePlanetSchema), updateCharacterController)

export default planetsRouter