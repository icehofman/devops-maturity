import { Component } from '@angular/core';
import { Iquestions } from './iquestions';
import { Observable } from 'rxjs';
import { QuestionsService } from './questions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuestionsService],
})
export class AppComponent {
  title = 'Avaliação de maturidade DevOps';

  private questionsObservable: Observable<Iquestions>;

  constructor(private questionsService: QuestionsService) { }

  ngOnInit(): void {
    this.questionsObservable = this.questionsService.getQuestionsAll()
  }
}
