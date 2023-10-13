import { escape } from "../decorators/escape.js";
import { Negociacao } from "../models/negociacao";
import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {

  @escape
  protected template(model: Negociacoes): string {
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

  private negociacaoRow(negociacao: Negociacao) {
    return `
      <tr>
        <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
        <td>${negociacao.quantidade}</td>
        <td>${negociacao.valor}</td>
      </tr>
    `
  }
}