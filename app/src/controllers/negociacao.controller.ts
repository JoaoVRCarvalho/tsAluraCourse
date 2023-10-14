import { domInjector } from "../decorators/dom-injector.js";
import { logPerformance } from "../decorators/performance.log.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/NegociacoesView.js";
import { AlertView } from "../views/alertView.js";

export class NegociacaoController {
  @domInjector('#data')
  private inputData: HTMLInputElement;
  @domInjector('#quantidade')
  private inputQuantidade: HTMLInputElement
  @domInjector('#valor')
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes;
  private negociacoesView = new NegociacoesView('#negociacoesView');
  private alertView = new AlertView('#mensagemView');

  constructor() {
    this.negociacoesView.update(this.negociacoes)
  }
  
  @logPerformance()
  public add(): void {
    const negociacao = Negociacao.createNegociacao(
      this.inputData.value, 
      this.inputQuantidade.value, 
      this.inputValor.value
    );
    
    if (!this.isWeekDay(negociacao.data)) {
      this.alertView
        .update('O produto não pode ser cadastrado, pois a data não é valida, o mesmo deve estar em um dia útil.')
    }

    this.negociacoes.add(negociacao);
    this.cleanForm();
    this.updateView();
  }

  private isWeekDay(date: Date): boolean {
    return date.getDay() !== 0 && date.getDay() !== 6
  }

  private cleanForm(): void {
    this.inputData.value = '';
    this.inputQuantidade.value = '';
    this.inputValor.value = '';
  }

  private updateView():void {
    this.negociacoesView.update(this.negociacoes);
    this.alertView.update('Produto adicionado com sucesso');
  }
}