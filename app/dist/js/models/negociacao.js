export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
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
