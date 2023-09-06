export abstract class View<T> {

  protected element: HTMLElement;
  protected escape = false;

  constructor(seletor: string, escape?: boolean) {
    this.element = document.querySelector(seletor);
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
