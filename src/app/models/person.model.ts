export class Person {
  id?: number;
  firstName: string;
  lastName: string;
  imgUrl: string;

  constructor(firstName: string, lastName: string, imgUrl: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.imgUrl = imgUrl;
  }

 }