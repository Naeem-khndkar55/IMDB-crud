export interface Movie{
    id:string,
    title: string,
    actors: string,
    director: string,
    releaseDate:string
}

export const dummyMovieList: Movie[]=[{
    id:new Date().toJSON().toString(),
    title: "xyz",
    actors:"lal,nill",
    director:"abc",
    releaseDate:"01/02/122"
}]

export enum PageEnum{
    list,
    add,
    edit
}