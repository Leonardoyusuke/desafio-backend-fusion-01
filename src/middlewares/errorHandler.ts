import { ErrorHandler } from "@/helpers/interfaces/errorHandlerInterface";
import { Request, Response } from "express";

export const errorHandler: ErrorHandler = (
  err: any,
  req: Request,
  res: Response,
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