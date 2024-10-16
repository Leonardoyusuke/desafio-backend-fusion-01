import jwt, { JwtPayload } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { UnauthorizedError } from "@/helpers/errors/apiErrors";
import characterRepository from "@/modules/charaters/repositories/charactersRepositories";

interface ITokenPayload extends JwtPayload {
  id: number;
}
const secretKey = process.env.SECRET_JWT;

export const authValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!secretKey) throw new Error("");

  const { authorization } = req.headers as Record<string, string>;
  if (!authorization) throw new UnauthorizedError("You must be signed in to continue");

  const parts = authorization.split(" ");
  if (parts.length !== 2) throw new UnauthorizedError("You must be signed in to continue");

  const [schema, token] = parts;
  if (schema !== "Bearer") throw new UnauthorizedError("You must be signed in to continue");

  jwt.verify(token, secretKey, async (error, decoded) => {
    try {
      if (error !== null) throw new UnauthorizedError("You must be signed in to continue");

      const { id } = decoded as ITokenPayload;
      const user = await characterRepository.findById(id)

      if (!user) throw new UnauthorizedError("You must be signed in to continue");

      res.locals.user = user;
      next();
    } catch (error) {
      next(error);
    }
  });
};