import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuestionsService {
  baseUrl:string = "http://localhost:3000";
  
  constructor(private http : HttpClient) { }
  
  get_questions(){
    return this.http.get(this.baseUrl + '/questions');
  }
}
