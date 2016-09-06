import { ElementRef, Component } from '@angular/core';

@Component({
  selector: 'dropdown-menu',
  template: `
    <ng-content></ng-content>
  `
})
export class DropdownMenu {

  constructor(element: ElementRef) {
    this.element = element.nativeElement;
    this.element.classList.add('dropdown-menu');
  }

}