export class Person {
  id?: number;
  firstName: string;
  lastName: string;
  imgUrl: string;
  description: string;

  constructor(firstName: string, lastName: string, imgUrl: string, description: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.imgUrl = imgUrl;
    this.description = description;
  }

 }