var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInjector } from "../decorators/dom-injector.js";
import { logPerformance } from "../decorators/performance.log.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/NegociacoesView.js";
import { AlertView } from "../views/alertView.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes;
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.alertView = new AlertView('#mensagemView');
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
__decorate([
    domInjector('#data')
], NegociacaoController.prototype, "inputData", void 0);
__decorate([
    domInjector('#quantidade')
], NegociacaoController.prototype, "inputQuantidade", void 0);
__decorate([
    domInjector('#valor')
], NegociacaoController.prototype, "inputValor", void 0);
__decorate([
    logPerformance()
], NegociacaoController.prototype, "add", null);
