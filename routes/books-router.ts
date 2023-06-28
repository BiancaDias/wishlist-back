import { Router } from "express";
import * as bookController from "../controllers/books-controller"
import { validateSchemaMiddleware } from "../middlewares/books-middlewares";
import { postBookSchema } from "../schemas/books-schema";

const booksRouter = Router();

booksRouter.get("/books", bookController.getBooks);
booksRouter.get("/books/:publisher", bookController.getTotalBooksForPublisher);
booksRouter.post("/books",validateSchemaMiddleware(postBookSchema), bookController.createBook);
booksRouter.post("/books/:id", bookController.putBook);
booksRouter.delete("/books/delete", bookController.deleteBook)


export default booksRouter;