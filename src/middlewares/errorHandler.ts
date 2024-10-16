import { ErrorHandler } from "@/helpers/interfaces/errorHandlerInterface";
import { Request, Response, NextFunction } from "express";

export const errorHandler: ErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err.statusCode && err.message) {
    return res.status(err.statusCode).json({
      error: err.message,
    });
  }
  return res.status(500).json({
    error: "Internal server error",
  });
};