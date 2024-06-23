export class Message {
  date: Date;
  content: string;
  type_content: string;
  user: string;

  constructor(
    date: Date,
    content: string,
    type_content: string,
    user: string
  ){
    this.date = date;
    this.content = content;
    this.type_content = type_content;
    this.user = user;
  }
}
