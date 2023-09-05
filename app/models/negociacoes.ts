import { Negociacao } from "./negociacao";

export class Negociacoes {
  private _negociacoes: Array<Negociacao> = [];

  public add(negociacao: Negociacao) {
    this._negociacoes.push(negociacao);
  }

  public read(): ReadonlyArray<Negociacao> {
    return this._negociacoes; 
  }
}