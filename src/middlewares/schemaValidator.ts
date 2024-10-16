import { BadRequest, Conflict } from "@/helpers/errors/apiErrors";
import { NextFunction, Request, Response } from "express";
import Joi from "joi";

interface JoiSchema {
  [key: string]: Joi.Schema;
}

export function validateSchema(schema: Joi.ObjectSchema<JoiSchema>) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const { error } = schema.validate(req.body, { abortEarly: false });
      if (error) {
        const errors = error.details.map((detail: any) => detail.message);
        throw new BadRequest(errors.join(", "));
      }

      next();
    } catch (err) {
      next(err);
    }
  };
}