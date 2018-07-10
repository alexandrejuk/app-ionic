import { Component, Input } from '@angular/core';

@Component({
  selector: 'header-component',
  template: `<div class="header">{{ title }}</div>`
})
export class HeaderComponent {

  @Input()
  title = '';
  constructor() { }

}
