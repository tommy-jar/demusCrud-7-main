import { Author } from "./authors"

export class Book
{
  id:number=0
  nameBook:string=""
  publicationDateBook:Date= new Date(Date.now())
  nhojas:number=0
  author:Author=new Author()
}
