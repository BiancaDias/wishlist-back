import { db } from "../database/database.connection";
import { Books, BooksBD, TotalPublisher, UpdateBooks } from "../protocols";

export function createBookDB(books: Books){
    const { name, genre, publisher } = books
    return db.query<Books>(`INSERT INTO books (name, genre, publisher) VALUES ($1,$2,$3);`,[name, genre, publisher])
}

export function getBooksDB(){
    return db.query<BooksBD>(`SELECT * FROM books;`);
}

export function getTotalBooksForPublisherDB(publisher: string){
    return db.query<TotalPublisher>(`SELECT COUNT(*) AS count FROM books WHERE publisher = $1;`, [publisher]);
}

export function putBookDB(abstract: string,status: boolean, note: string, id: number){
    return db.query<UpdateBooks>(`UPDATE books
        SET status = $1, note = $2, abstract = $3
        WHERE id = $4;
    `, [status, note, abstract, id]);
}

export function deleteBookDB(id: number){ //não sei qual o tipo que é retornado aqui então considerei BooksBD porque está deletando esse tipo do banco
    return db.query<BooksBD>(`DELETE FROM books WHERE id = $1;`, [id]);
}