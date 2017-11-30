import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iquestions } from './iquestions';

@Injectable()
export class QuestionsService {
  baseUrl: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getQuestionsAll() {
    return this.http.get<Iquestions>(this.baseUrl + '/questions?pontos=1');
  }
}
