import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuestionsService {
  baseUrl:string = "http://localhost:3000";
  
  constructor(private http : HttpClient) { }
  
  getQuestionsAll(){
    return this.http.get(this.baseUrl + '/questions');
  }
}
