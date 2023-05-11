import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from 'src/app/models/experience';
import { enviroment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  URL = `${enviroment.DOMAIN}/experience`;

  constructor(private httpClient: HttpClient) { }

  public getExperiences(): Observable<Experience[]> {
    return this.httpClient.get<Experience[]>(this.URL);
  }
  public getDetails(id: number): Observable<Experience> {
    return this.httpClient.get<Experience>(`${this.URL}/details/${id}`);
  }
  public save(experience: Experience): Observable<any> {
    return this.httpClient.post<any>(this.URL, experience);
  }
  public update(experience: Experience): Observable<any> {
    return this.httpClient.patch<any>(`${this.URL}/update`, experience);
  }
  public delete(id: number | undefined): Observable<any> {
    return this.httpClient.delete<any>(`${this.URL}/delete/${id}`);
  }
}
