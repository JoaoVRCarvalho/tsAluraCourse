export abstract class View<T> {

  protected element: HTMLElement;
  protected escape = false;

  constructor(seletor: string, escape?: boolean) {
    if(!document.querySelector(seletor)) {
      throw `o seletor: ${seletor} não está presente no DOM`
    }
    this.element = document.querySelector(seletor) as HTMLElement;
  }

  update(model: T): void {
    let template = this.template(model);
    if (this.escape) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, '');
    }
    this.element.innerHTML = this.template(model);
  }

  protected abstract template(model: T): string;
}
