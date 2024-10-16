import { validateSchema } from "@/middlewares/schemaValidator";
import { characterSchemaJoi } from "@/modules/charaters/schemas/characterSchema";
import createCharacterController from "@/modules/charaters/useCases/create/createController";
import findAllCharactersController from "@/modules/charaters/useCases/findAll/findAllController";
import findByIdCharacterController from "@/modules/charaters/useCases/findById/findByIdController";
import { Router } from "express";

const characterRouter = Router()

characterRouter.post('/',validateSchema(characterSchemaJoi),createCharacterController)
characterRouter.get('/',findAllCharactersController)
characterRouter.get('/:id',findByIdCharacterController)

export default characterRouter