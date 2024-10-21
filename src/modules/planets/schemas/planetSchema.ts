import Joi from "joi";

export const planetSchema = Joi.object({
    name: Joi.string().min(2).required(),
    climate: Joi.string().min(2).required(),
    terrain: Joi.string().min(2).required(),
    starSystemId: Joi.number().required()
})