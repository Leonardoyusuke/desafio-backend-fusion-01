import Joi from "joi";

export const characterSchemaJoi = Joi.object({
    name: Joi.string().min(2).required(),
    speciesId: Joi.number().required(),
    affiliationId: Joi.number().required(),
    homePlanetId: Joi.number().required()
})

export const updateCharacterSchemaJoi = Joi.object({
    name: Joi.string().min(2),
    speciesId: Joi.number(),
    affiliationId: Joi.number(),
    homePlanetId: Joi.number()
})