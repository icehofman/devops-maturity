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
  PessoasCultura = 'Pessoas e Cultura';
  PlanejamentoContinuo = 'Planejamento continuo';
  IntegracaoContinua = 'Integração continua';
  TestesContinuos = 'Testes continuos';
  InfraestruturaCodigo = 'Infraestrutura como Código';
  EntregaContinua = 'Entrega continua';
  MonitoracaoContinua = 'Monitoração continua';
  FeedbackContinuo = 'Feedback contínuo';

  public pessoasCultura: Observable<Iquestions>;
  public planejamentoContinuo: Observable<Iquestions>; 
  public integracaoContinua: Observable<Iquestions>;
  public testesContinuos: Observable<Iquestions>;
  public infraestruturaCodigo: Observable<Iquestions>;
  public entregaContinua: Observable<Iquestions>;
  public monitoracaoContinua: Observable<Iquestions>;
  public feedbackContinuo: Observable<Iquestions>;

  constructor(private questionsService: QuestionsService) { }

  ngOnInit(): void {
    this.pessoasCultura = this.questionsService.getPessoasCulturaAll();
    this.planejamentoContinuo = this.questionsService.getPlanejamentoContinuoAll();
    this.integracaoContinua = this.questionsService.getIntegracaoContinuaAll();
    this.testesContinuos = this.questionsService.getTestesContinuosAll();
    this.infraestruturaCodigo = this.questionsService.getInfraestruturaCodigoAll();
    this.entregaContinua = this.questionsService.getEntregaContinuaAll();
    this.monitoracaoContinua = this.questionsService.getMonitoracaoContinuaAll();
    this.feedbackContinuo = this.questionsService.getFeedbackContinuoAll();
  }
}
