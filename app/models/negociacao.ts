export class Negociacao {

  constructor(
    private _data: Date, // no caso de date, ela não pdoe ficar como read only, pois ela não um tipo primitivo.
    public readonly quantidade: number,
    public readonly valor: number,        
  ) {}

  get data(): Date {
    // como date não é um tipo primitivo, é feita está gambiarra para que se evite a mutação do valor por meio de métdodos 
    let date = new Date(this._data.getTime())
    return date
  }

  get volume(): number {
    return this.quantidade * this.valor;
  }
}