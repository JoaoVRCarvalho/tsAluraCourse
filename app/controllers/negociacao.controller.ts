import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/NegociacoesView.js";
import { AlertView } from "../views/alertView.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes;
  private negociacoesView = new NegociacoesView('#negociacoesView');
  private alertView = new AlertView('#mensagemView');

  constructor() {
    this.inputData = document.querySelector('#data');
    this.inputQuantidade = document.querySelector('#quantidade');
    this.inputValor = document.querySelector('#valor');
    this.negociacoesView.update(this.negociacoes)
  }

  public add(): void {
    let negociacao = this.createNegociacao();
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
  
  private createNegociacao(): Negociacao {
    let data = new Date(this.inputData.value.replace('-', ','));
    let quantidade = parseInt(this.inputQuantidade.value);
    let valor = parseFloat(this.inputValor.value);
    return new Negociacao(data, quantidade, valor)
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