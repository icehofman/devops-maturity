import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Iquestions } from './iquestions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'devops-maturity-app';

  results = '';
  
    constructor(private http: HttpClient){ }
  
    ngOnInit(): void { 
      this.http.get<Iquestions>('http://localhost:3000/questions/1').subscribe(
        data => {
          console.log("id: " + data.id);
          console.log("Questão: " + data.questao);
          console.log("Resposta: " + data.diretriz);
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log("Client-side error occured.");
          } else {
            console.log("Server-side error occured.");
          }
        }
      );
    }
}
