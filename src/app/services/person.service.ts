import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/environments/environment';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  URL = `${enviroment.DOMAIN}/person`;


  constructor(private http: HttpClient) { }

  public getPerson(): Observable<Person> {
    return this.http.get<Person>(this.URL);
  }

  public update(id: number | undefined, person: Person): Observable<any> {
    return this.http.patch<Person>(`${this.URL}/update/${id}`, person);
  }
}
