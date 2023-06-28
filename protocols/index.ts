export type Books = {
    name: string,
    publisher: string,
    genre: string,
}//status sempre false por default pois se a pessoa esta adicionando a wishlist é pq nao leu ainda

export type UpdateBooks = {
    status: boolean,
    note?: string,
    abstract?: string
}