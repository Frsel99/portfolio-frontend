import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/environments/environment';
import { Education } from '../models/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  URL = `${enviroment.DOMAIN}/education`;

  constructor(private httpClient: HttpClient) { }

  public getEducations(): Observable<Education[]> {
    return this.httpClient.get<Education[]>(this.URL);
  }
  public save(education: Education): Observable<any> {
    return this.httpClient.post<any>(this.URL, education);
  }
  public update(education: Education): Observable<any> {
    return this.httpClient.patch<any>(`${this.URL}/update`, education);
  }
  public delete(id: number | undefined): Observable<any> {
    return this.httpClient.delete<any>(`${this.URL}/delete/${id}`);
  }
}
