import { Request, Response } from "express";
import * as booksService from "../service/books-service"
import { Books } from "../protocols";
import httpStatus from "http-status";

export function createBook(req: Request, res: Response){
    const books = req.body as Books
    booksService.createBookService(books)
    res.sendStatus(httpStatus.CREATED)
}

export function getBooks(req: Request, res: Response){
    const books = booksService.getBooks();
    res.send(books);
}

export function getTotalBooksForPublisher(req: Request, res: Response){

}

export function putBook(req: Request, res: Response){

}

export function deleteBook(req: Request, res: Response){
    
}