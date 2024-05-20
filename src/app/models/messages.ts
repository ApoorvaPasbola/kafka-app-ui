export interface IMessages{
    timestamp : string,
    key : string,
    message : string,
    partition: number,
    offset:number,
    headersFormatted: string,
    headers: any

}
