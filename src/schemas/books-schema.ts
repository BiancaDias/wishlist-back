import Joi from "joi";
import { Books, UpdateBooks } from "../protocols";

export const postBookSchema = Joi.object<Books>({
    name: Joi.string().required(),
    publisher: Joi.string().required(),
    genre: Joi.string().required(),
})

export const updateBookSchema = Joi.object<UpdateBooks>({
    status: Joi.boolean().required(),
    id: Joi.number().required(),
    note: Joi.string(),
    abstract: Joi.string()
})