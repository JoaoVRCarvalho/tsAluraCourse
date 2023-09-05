import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/NegociacoesView.js";
import { AlertView } from "../views/alertView.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes;
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.alertView = new AlertView('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    add() {
        let negociacao = this.createNegociacao();
        if (negociacao.data.getDay() !== 0 && negociacao.data.getDay() !== 6) {
            this.negociacoes.add(negociacao);
            this.cleanForm();
            this.updateView();
            return true;
        }
        this.alertView.update('O produto não pode ser cadastrado, pois a data não é valida, o mesmo deve estar em um dia útil.');
    }
    createNegociacao() {
        let data = new Date(this.inputData.value.replace('-', ','));
        let quantidade = parseInt(this.inputQuantidade.value);
        let valor = parseFloat(this.inputValor.value);
        return new Negociacao(data, quantidade, valor);
    }
    cleanForm() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
    }
    updateView() {
        this.negociacoesView.update(this.negociacoes);
        this.alertView.update('Produto adicionado com sucesso');
    }
}
