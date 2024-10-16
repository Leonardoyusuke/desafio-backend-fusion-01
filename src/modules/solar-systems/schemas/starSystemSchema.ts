import Joi from "joi";

export const createStarSystemSchemaJoi = Joi.object({
name: Joi.string().min(2).required(),
description: Joi.string().min(5).required(),
})

export const updateStarSystemSchemaJoi = Joi.object({
    name: Joi.string().min(2),
    description: Joi.string().min(5)})