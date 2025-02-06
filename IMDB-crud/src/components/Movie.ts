export interface Movie{
    id:string,
    title: string,
    actors: string,
    director: string,
    releaseDate:string
}

export enum PageEnum{
    list,
    add,
    edit
}