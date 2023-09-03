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

  createNegociacao(): Negociacao {
    let data = new Date(this.inputData.value.replace('-', ','));
    let quantidade = parseInt(this.inputQuantidade.value);
    let valor = parseFloat(this.inputValor.value);
    const negociacao = new Negociacao(data, quantidade, valor);
    return negociacao;
  }

  add(): boolean {
    this.negociacoes.add(this.createNegociacao())
    this.negociacoesView.update(this.negociacoes);
    this.cleanForm();
    this.alertView.update('Produto adicionado com sucesso');
    return true
  }

  cleanForm(): void {
    this.inputData.value = '';
    this.inputQuantidade.value = '';
    this.inputValor.value = '';
  }

}