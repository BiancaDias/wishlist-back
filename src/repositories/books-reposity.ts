import { db } from "../database/database.connection";
import { Books } from "../protocols";

export function createBookDB(books: Books){
    const { name, genre, publisher } = books
    return db.query(`INSERT INTO books (name, genre, publisher) VALUES ($1,$2,$3);`,[name, genre, publisher])
}

export function getBooksDB(){
    return db.query(`SELECT * FROM books;`);
}

export function getTotalBooksForPublisherDB(publisher: string){
    return db.query(`SELECT COUNT(*) AS count FROM books WHERE publisher = $1;`, [publisher]);
}

export function putBookDB(abstract: string,status: boolean, note: string, id: number){
    return db.query(`UPDATE books
        SET status = $1, note = $2, abstract = $3
        WHERE id = $4;
    `, [status, note, abstract, id]);
}

export function deleteBookDB(id: number){
    return db.query(`DELETE FROM books WHERE id = $1;`, [id]);
}