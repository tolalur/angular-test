import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[add-in-host]'
})
export class AddInHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}