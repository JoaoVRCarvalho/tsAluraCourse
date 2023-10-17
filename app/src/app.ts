import { NegociacaoController } from "./controllers/negociacao.controller.js";

const controller = new NegociacaoController

const form = document.querySelector('.form') as Element;

form.addEventListener('submit', event => {
  event.preventDefault();
  controller.add();
})

const btnImport = document.querySelector('#btn-import')

if (btnImport) {
  btnImport.addEventListener('click', () => {
    console.log('clicou')
    controller.importData();
  })
}