import Joi from "joi";

export const planetSchema = Joi.object({
    name: Joi.string().min(2).required(),
    climate: Joi.string().min(2).required(),
    terrain: Joi.string().min(2).required(),
    starSystemId: Joi.number().required()
})

export const updatePlanetSchema = Joi.object({
    name: Joi.string().min(2),
    climate: Joi.string().min(2),
    terrain: Joi.string().min(2),
    starSystemId: Joi.number()})