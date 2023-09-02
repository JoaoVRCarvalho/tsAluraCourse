import { Negociacao } from "../models/negociacao";
import { Negociacoes } from "../models/negociacoes";

export class NegociacoesView {
  private elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  template(model: Negociacoes): string {
    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
            </tr>
        </thead>
        <tbody>
          ${model.read().map(negociacao => this.negociacaoRow(negociacao)).join('')}
        </tbody>
      </table>
    `    
  }

  update(model: Negociacoes): void {
    this.elemento.innerHTML = this.template(model);
  }

  negociacaoRow(negociacao: Negociacao) {
    return `
      <tr>
        <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
        <td>${negociacao.quantidade}</td>
        <td>${negociacao.valor}</td>
      </tr>
    `
  }

}