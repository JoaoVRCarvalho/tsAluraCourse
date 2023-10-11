import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/NegociacoesView.js";
import { AlertView } from "../views/alertView.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes;
        this.negociacoesView = new NegociacoesView('#negociacoesView', true);
        this.alertView = new AlertView('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    add() {
        const negociacao = Negociacao.createNegociacao(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.isWeekDay(negociacao.data)) {
            this.alertView
                .update('O produto não pode ser cadastrado, pois a data não é valida, o mesmo deve estar em um dia útil.');
        }
        this.negociacoes.add(negociacao);
        this.cleanForm();
        this.updateView();
    }
    isWeekDay(date) {
        return date.getDay() !== 0 && date.getDay() !== 6;
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
