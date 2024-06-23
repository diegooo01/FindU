export class Message {
  date: Date;
  content: string;
  type: string;
  user: string;

  constructor(
    date: Date,
    content: string,
    type: string,
    user: string
  ){
    this.date = date;
    this.content = content;
    this.type = type;
    this.user = user;
  }
}
