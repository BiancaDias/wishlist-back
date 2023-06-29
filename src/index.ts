import express,  { json } from "express";
import "express-async-errors";
import booksRouter from "./routes/books-router";
import errorHandler from "./middlewares/error-middlewares";

const app = express();
app.use(json());
app.use(booksRouter);
app.use(errorHandler);
const port = 5000;
app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`)
})