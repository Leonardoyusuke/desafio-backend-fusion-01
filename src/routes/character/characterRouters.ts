import { validateSchema } from "@/middlewares/schemaValidator";
import { authValidation } from "@/middlewares/authMiddlewares";
import { characterSchemaJoi, updateCharacterSchemaJoi } from "@/modules/charaters/schemas/characterSchema";
import createCharacterController from "@/modules/charaters/useCases/create/createController";
import findAllCharactersController from "@/modules/charaters/useCases/findAll/findAllController";
import findByIdCharacterController from "@/modules/charaters/useCases/findById/findByIdController";
import updateCharacterController from "@/modules/charaters/useCases/update/updateController";
import { Router } from "express";

const characterRouter = Router()

characterRouter.post('/',validateSchema(characterSchemaJoi),createCharacterController)
characterRouter.get('/',findAllCharactersController)
characterRouter.get('/:id',findByIdCharacterController)
characterRouter.put('/:id',authValidation,validateSchema(updateCharacterSchemaJoi),updateCharacterController)

export default characterRouter