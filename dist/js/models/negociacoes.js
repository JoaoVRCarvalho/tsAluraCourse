export class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    add(negociacao) {
        this._negociacoes.push(negociacao);
    }
    read() {
        return [...this._negociacoes]; // Para que não seja retornado a propriedade privada que deve ser imutavel, retorna-se um outro array que é uma copia ao array de negociacoes. 
    }
}
