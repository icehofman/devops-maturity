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
    return this.http.get<Iquestions>(this.baseUrl + '/questions?pontos=1&grupo=pessoas e cultura');
  }

  getPlanejamentoContinuoAll() {
    return this.http.get<Iquestions>(this.baseUrl + '/questions?pontos=1&grupo=planejamento continuo');
  }

  getIntegracaoContinuaAll() {
    return this.http.get<Iquestions>(this.baseUrl + '/questions?pontos=1&grupo=integração continua');
  }

  getTestesContinuosAll() {
    return this.http.get<Iquestions>(this.baseUrl + '/questions?pontos=1&grupo=testes continuos');
  }

  getInfraestruturaCodigoAll() {
    return this.http.get<Iquestions>(this.baseUrl + '/questions?pontos=1&grupo=infraestrutura como código');
  }

  getEntregaContinuaAll() {
    return this.http.get<Iquestions>(this.baseUrl + '/questions?pontos=1&grupo=entrega continua');
  }

  getMonitoracaoContinuaAll() {
    return this.http.get<Iquestions>(this.baseUrl + '/questions?pontos=1&grupo=monitoração continua');
  }

  getFeedbackContinuoAll() {
    return this.http.get<Iquestions>(this.baseUrl + '/questions?pontos=1&grupo=feedback contínuo');
  }
}
