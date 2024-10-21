import { validateSchema } from "@/middlewares/schemaValidator";
import { authValidation } from "@/middlewares/authMiddlewares";
import { Router } from "express";
import { planetSchema } from "@/modules/planets/schemas/planetSchema";
import createPlanetController from "@/modules/planets/useCases/create/createController";

const planetsRouter = Router()

planetsRouter.post('/',validateSchema(planetSchema),createPlanetController)

export default planetsRouter