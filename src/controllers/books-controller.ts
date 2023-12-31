import { Request, Response } from "express";
import * as booksService from "../service/books-service"
import { Books, UpdateBooks } from "../protocols";
import httpStatus from "http-status";
import { notFoundError } from "../errors/errors";

export async function createBook(req: Request, res: Response){
    const books:Books = req.body
    await booksService.createBookService(books)
    res.sendStatus(httpStatus.CREATED)
}

export async function getBooks(req: Request, res: Response){
    const books = await booksService.getBooks();
    res.send(books.rows);
}

export async function getTotalBooksForPublisher(req: Request, res: Response){
    const {publisher} = req.params;
    const books = await booksService.getTotalBooksForPublisherService(publisher);
    res.send(books.rows)
}

export async function putBook(req: Request, res: Response){
    const { id, status, abstract, note } = req.body as UpdateBooks;
    await booksService.putBookService(abstract,status, note, Number(id));
    res.sendStatus(httpStatus.OK);
}

export async function deleteBook(req: Request, res: Response){
    const { id } = req.params;
    if(!id) throw notFoundError(id)
    await booksService.deleteBookService(Number(id))
    res.sendStatus(httpStatus.OK)
}