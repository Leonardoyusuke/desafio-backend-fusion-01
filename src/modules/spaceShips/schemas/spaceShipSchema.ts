import Joi from "joi";

export const spaceShipSchema = Joi.object({
    name:Joi.string().min(2).required(),
    model:Joi.string().min(2).required(),
    manufacturer:Joi.string().min(2).required(),
    passengerCapacity:Joi.number().min(2).required()
})

export const updateSpaceShipSchema = Joi.object({
    name: Joi.string().min(2),
    model: Joi.string().min(2),
    manufacturer: Joi.string().min(2),
    passengerCapacity: Joi.number()
})