export class View {
    constructor(seletor) {
        if (!document.querySelector(seletor)) {
            throw `o seletor: ${seletor} não está presente no DOM`;
        }
        this.element = document.querySelector(seletor);
    }
    update(model) {
        this.element.innerHTML = this.template(model);
    }
}
