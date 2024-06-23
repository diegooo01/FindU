export class Users {
  id: string;
  age: number;
  career: string;
  chats: [];
  college: string;
  email: string;
  image: string;
  lastname: string;
  name: string;
  level: number;

  constructor(
    id: string,
    age: number,
    career: string,
    chats: [],
    college: string,
    email: string,
    image: string,
    lastname: string,
    name: string,
    level: number
  ){
    this.id = id;
    this.age = age;
    this.career = career;
    this.chats = chats;
    this.college = college;
    this.email = email;
    this.image = image;
    this.lastname = lastname;
    this.name = name;
    this.level = level;
  }
}
