export class Negociacao {
    constructor(_data, // no caso de date, ela não pdoe ficar como read only, pois ela não um tipo primitivo.
    quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        // como date não é um tipo primitivo, é feita está gambiarra para que se evite a mutação do valor por meio de métdodos 
        let date = new Date(this._data.getTime());
        return date;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    static createNegociacao(dateStr, quantidadeStr, valorStr) {
        let data = new Date(dateStr.replace('-', ','));
        let quantidade = parseInt(quantidadeStr);
        let valor = parseFloat(valorStr);
        return new Negociacao(data, quantidade, valor);
    }
}
