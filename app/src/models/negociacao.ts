export class Negociacao {

  constructor(
    private _data: Date,    
    public readonly quantidade: number,
    public readonly valor: number,        
  ) {}

  get data(): Date {
    let date = new Date(this._data.getTime())
    return date
  }

  get volume(): number {
    return this.quantidade * this.valor;
  }

  static createNegociacao(dateStr: string, quantidadeStr: string, valorStr: string): Negociacao {
    let data = new Date(dateStr.replace('-', ','));
    let quantidade = parseInt(quantidadeStr);
    let valor = parseFloat(valorStr);
    return new Negociacao(data, quantidade, valor)
  }
}
