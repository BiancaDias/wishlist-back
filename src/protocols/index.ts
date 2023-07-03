export type Books = {
    name: string,
    publisher: string,
    genre: string,
}//status sempre false por default pois se a pessoa esta adicionando a wishlist é pq nao leu ainda

export type UpdateBooks = {
    status: boolean,
    id: number,
    note?: string,
    abstract?: string
}

export type BooksBD = Books & UpdateBooks; //retorno do banco de dados

export type TotalPublisher = {
    count: number
}