import Joi from "joi";

export const characterSchemaJoi = Joi.object({
    name: Joi.string().min(2).required(),
    species: Joi.string().required(),
    affiliation: Joi.string().required(),
    homePlanet: Joi.string().required()
})

export const updateCharacterSchemaJoi = Joi.object({
    name: Joi.string().min(2),
    species: Joi.string(),
    affiliation: Joi.string(),
    homePlanetId: Joi.string()
})