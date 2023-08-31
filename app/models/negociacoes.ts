import { Negociacao } from "./negociacao";

export class Negociacoes {
  private _negociacoes: Array<Negociacao> = [];

  add(negociacao: Negociacao) {
    this._negociacoes.push(negociacao);
  }

  read(): ReadonlyArray<Negociacao> {
    return this._negociacoes; 
  }
}