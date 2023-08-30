import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement
  private inputValor: HTMLInputElement;

  constructor() {
    this.inputData = document.querySelector('#data');
    this.inputQuantidade = document.querySelector('#quantidade');
    this.inputValor = document.querySelector('#valor');
  }

  add(): boolean {
    let data = new Date(this.inputData.value.replace('-', ','))
    let quantidade = parseInt(this.inputQuantidade.value);
    let valor = parseFloat(this.inputValor.value);
    const negociacao = new Negociacao(data, quantidade, valor)
    this.limparFormulario()
    console.log(negociacao);
    return true
  }

  limparFormulario(): void {
    this.inputData.value = '';
    this.inputQuantidade.value = '';
    this.inputValor.value = '';
  }

}