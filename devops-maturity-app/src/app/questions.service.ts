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

  getPessoasCulturaAll() {
    return this.http.get<Iquestions>(this.baseUrl + '/questions?grupo=pessoas e cultura');
  }

  getPlanejamentoContinuoAll() {
    return this.http.get<Iquestions>(this.baseUrl + '/questions?grupo=planejamento continuo');
  }

  getIntegracaoContinuaAll() {
    return this.http.get<Iquestions>(this.baseUrl + '/questions?grupo=integração continua');
  }

  getTestesContinuosAll() {
    return this.http.get<Iquestions>(this.baseUrl + '/questions?grupo=testes continuos');
  }

  getInfraestruturaCodigoAll() {
    return this.http.get<Iquestions>(this.baseUrl + '/questions?grupo=infraestrutura como código');
  }

  getEntregaContinuaAll() {
    return this.http.get<Iquestions>(this.baseUrl + '/questions?grupo=entrega continua');
  }

  getMonitoracaoContinuaAll() {
    return this.http.get<Iquestions>(this.baseUrl + '/questions?grupo=monitoração continua');
  }

  getFeedbackContinuoAll() {
    return this.http.get<Iquestions>(this.baseUrl + '/questions?grupo=feedback contínuo');
  }
}
