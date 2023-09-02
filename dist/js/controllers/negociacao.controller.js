import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/NegociacoesView.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes;
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
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
        this.negociacoesView.update(this.negociacoes);
        this.cleanForm();
        return true;
    }
    cleanForm() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
    }
}
