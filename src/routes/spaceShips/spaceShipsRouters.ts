import { authValidation } from "@/middlewares/authMiddlewares";
import { validateSchema } from "@/middlewares/schemaValidator";
import findAllCharactersController from "@/modules/charaters/useCases/findAll/findAllController";
import findByIdCharacterController from "@/modules/charaters/useCases/findById/findByIdController";
import { spaceShipSchema, updateSpaceShipSchema } from "@/modules/spaceShips/schemas/spaceShipSchema";
import CreateSpaceShipController from "@/modules/spaceShips/useCases/create/createController";
import deleteSpaceShipController from "@/modules/spaceShips/useCases/delete/deleteController";
import updateSpaceShipController from "@/modules/spaceShips/useCases/update/updateController";
import { Router } from "express";

const spaceShipRouter = Router()

spaceShipRouter.post('/', authValidation, validateSchema(spaceShipSchema), CreateSpaceShipController)
spaceShipRouter.get('/', findAllCharactersController)
spaceShipRouter.get('/:id',findByIdCharacterController)
spaceShipRouter.put('/:id',authValidation, validateSchema(updateSpaceShipSchema), updateSpaceShipController)
spaceShipRouter.delete('/:id',authValidation, deleteSpaceShipController) 

export default spaceShipRouter