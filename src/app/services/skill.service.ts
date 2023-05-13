import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/environments/environment';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  URL = `${enviroment.DOMAIN}/skill`;

  constructor(private httpClient: HttpClient) { }

  public getSkills(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.URL);
  }
  public save(skill: Skill): Observable<any> {
    return this.httpClient.post<any>(this.URL, skill);
  }
  public update(skill: Skill): Observable<any> {
    return this.httpClient.patch<any>(`${this.URL}/update`, skill);
  }
  public delete(id: number | undefined): Observable<any> {
    return this.httpClient.delete<any>(`${this.URL}/delete/${id}`);
  }
}
