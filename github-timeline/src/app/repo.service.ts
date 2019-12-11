import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../common/constants';
import { Observable } from 'rxjs/index';
import { IRepo } from './interfaces/repo.interface';

@Injectable()
export class RepoService {
  constructor(private http: HttpClient) { }

  getRepos(name: string): Observable<IRepo[]> {
    return this.http.get<IRepo[]>(`${BASE_URL}/orgs/${name}/repos`);
  }
}
