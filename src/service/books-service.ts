import { Books } from "../protocols";
import * as booksRepository from "../repositories/books-reposity";

export function createBookService(book: Books){
    return booksRepository.createBookDB(book)
}

export async function getBooks(){
    return await booksRepository.getBooksDB();
}

export function getTotalBooksForPublisherService(publisher:string){
    return booksRepository.getTotalBooksForPublisherDB(publisher)
}

export function putBookService(abstract: string, status: boolean, note: string, id: number){
    return booksRepository.putBookDB(abstract, status, note, id)
}

export function deleteBookService(id: number){
        return booksRepository.deleteBookDB(id)
}