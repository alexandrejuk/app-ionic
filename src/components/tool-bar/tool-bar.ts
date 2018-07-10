import { Component } from '@angular/core';

@Component({
  selector: 'tool-bar-component',
  template: `
  <div class="tool-bar">
    <ul>
      <li class="active"><ion-icon name="home"></ion-icon></li>
      <li><ion-icon name="add"></ion-icon></li>
      <li><ion-icon name="person"></ion-icon></li>
      <li><ion-icon name="information-circle"></ion-icon></li>
    </ul>
  </div>`
})
export class ToolBarComponent {

  constructor() { }

}
