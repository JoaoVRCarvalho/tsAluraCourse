var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { logPerformance } from "../decorators/performance.log.js";
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
__decorate([
    logPerformance()
], View.prototype, "update", null);
