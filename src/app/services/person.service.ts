import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/environments/environment';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  URL = enviroment.DOMAIN;


  constructor(private http: HttpClient) { }

  public getPerson(): Observable<Person> {
    console.log(this.URL);
    return this.http.get<Person>(this.URL + "/person");
  }
}
