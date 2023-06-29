import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { ObjectSchema } from "joi";
import { unprocessableEntityError } from "../errors/errors";

export function validateSchemaMiddleware(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body);
    if (validation.error) {
      throw unprocessableEntityError();
    }

    next();
  };
}