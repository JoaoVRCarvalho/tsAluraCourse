export class View {
    constructor(seletor, escape) {
        this.escape = false;
        if (!document.querySelector(seletor)) {
            throw `o seletor: ${seletor} não está presente no DOM`;
        }
        this.element = document.querySelector(seletor);
    }
    update(model) {
        let template = this.template(model);
        if (this.escape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.element.innerHTML = this.template(model);
    }
}
