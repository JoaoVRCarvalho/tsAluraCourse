import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes;
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    createNegociacao() {
        let data = new Date(this.inputData.value.replace('-', ','));
        let quantidade = parseInt(this.inputQuantidade.value);
        let valor = parseFloat(this.inputValor.value);
        const negociacao = new Negociacao(data, quantidade, valor);
        return negociacao;
    }
    add() {
        this.negociacoes.add(this.createNegociacao());
        this.limparFormulario();
        console.log(this.negociacoes.read());
        return true;
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
    }
}
