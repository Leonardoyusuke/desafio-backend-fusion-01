import { authValidation } from "@/middlewares/authMiddlewares";
import { validateSchema } from "@/middlewares/schemaValidator";
import { spaceShipSchema } from "@/modules/spaceShips/schemas/spaceShipSchema";
import CreateSpaceShipController from "@/modules/spaceShips/useCases/create/createController";
import { Router } from "express";

const spaceShipRouter = Router()

spaceShipRouter.post('/', authValidation, validateSchema(spaceShipSchema), CreateSpaceShipController)

export default spaceShipRouter