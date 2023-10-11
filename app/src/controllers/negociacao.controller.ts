import { logPerformance } from "../decorators/performance.log.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/NegociacoesView.js";
import { AlertView } from "../views/alertView.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes;
  private negociacoesView = new NegociacoesView('#negociacoesView', true);
  private alertView = new AlertView('#mensagemView');

  constructor() {
    this.inputData = document.querySelector('#data') as HTMLInputElement;
    this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
    this.inputValor = document.querySelector('#valor') as HTMLInputElement;
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