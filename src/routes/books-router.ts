import { Router } from "express";
import * as bookController from "../controllers/books-controller"
import { validateSchemaMiddleware } from "../middlewares/books-middlewares";
import { postBookSchema, updateBookSchema } from "../schemas/books-schema";

const booksRouter = Router();

booksRouter.get("/books", bookController.getBooks);
booksRouter.get("/books/:publisher", bookController.getTotalBooksForPublisher);
booksRouter.post("/books",validateSchemaMiddleware(postBookSchema), bookController.createBook);
booksRouter.put("/books",validateSchemaMiddleware(updateBookSchema), bookController.putBook);
booksRouter.delete("/books/:id", bookController.deleteBook)


export default booksRouter;