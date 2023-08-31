import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes;

  constructor() {
    this.inputData = document.querySelector('#data');
    this.inputQuantidade = document.querySelector('#quantidade');
    this.inputValor = document.querySelector('#valor');
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
    this.limparFormulario();
    console.log(this.negociacoes.read());
    return true
  }

  limparFormulario(): void {
    this.inputData.value = '';
    this.inputQuantidade.value = '';
    this.inputValor.value = '';
  }

}