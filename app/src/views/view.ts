export abstract class View<T> {

  protected element: HTMLElement;

  constructor(seletor: string) {
    if(!document.querySelector(seletor)) {
      throw `o seletor: ${seletor} não está presente no DOM`
    }
    this.element = document.querySelector(seletor) as HTMLElement;
  }

  update(model: T): void {
    this.element.innerHTML = this.template(model);
  }

  protected abstract template(model: T): string;
}
