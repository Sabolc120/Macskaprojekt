export interface Cats{
    id: number,
    catname: string,
    catpicture: string,
    visits: number,
    description: string
}
export interface AddCatResponse{
    success: boolean,
    data: Cats,
    message: string;
}
export interface AdoptCatResponse{
    success: boolean,
    message:string
}