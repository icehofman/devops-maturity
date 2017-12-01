import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iquestions } from './iquestions';
import { environment } from '../environments/environment';

@Injectable()
export class QuestionsService {
  baseUrl: string = environment.apiDevOpsMaturityUrl;

  constructor(private http: HttpClient) { }

  getQuestionsAll() {
    return this.http.get<Iquestions>(this.baseUrl + '/questions?pontos=1');
  }
}
