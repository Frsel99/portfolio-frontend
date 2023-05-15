import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/environments/environment';
import { Project } from '../models/project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  URL = `${enviroment.DOMAIN}/project`;

  constructor(private httpClient: HttpClient) { }

  public getProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.URL);
  }
  public save(project: Project): Observable<any> {
    return this.httpClient.post<any>(this.URL, project);
  }
  public update(project: Project): Observable<any> {
    return this.httpClient.patch<any>(`${this.URL}/update`, project);
  }
  public delete(id: number | undefined): Observable<any> {
    return this.httpClient.delete<any>(`${this.URL}/delete/${id}`);
  }
}
