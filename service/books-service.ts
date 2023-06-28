import { Books } from "../protocols";
import * as booksRepository from "../repositories/books-reposity";

export function createBookService(book: Books){
    return booksRepository.createBookDB(book)
}

export function getBooks(){
    return booksRepository.getBooksDB();
}

export function getTotalBooksForPublisherService(){
    return booksRepository.getTotalBooksForPublisherDB()
}

export function putBookService(){
    return booksRepository.putBookDB()
}

export function deleteBookService(){
        return booksRepository.deleteBookDB()
}