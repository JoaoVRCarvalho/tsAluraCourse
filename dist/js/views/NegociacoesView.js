export class NegociacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(model) {
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
    `;
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
    negociacaoRow(negociacao) {
        return `
      <tr>
        <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
        <td>${negociacao.quantidade}</td>
        <td>${negociacao.valor}</td>
      </tr>
    `;
    }
}
