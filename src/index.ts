import express,  { json } from "express";
import cors from "cors";
import booksRouter from "../routes/books-router";

const app = express();
app.use(json());
app.use(cors());
app.use(booksRouter);
const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`)
})