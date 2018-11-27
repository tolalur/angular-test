import { Component, OnInit, ViewChild } from '@angular/core';
import { AddInHostDirective } from 'src/app/add-in-host.directive';

@Component({
  selector: 'tab-content',
  template: 
      `
      <div class="tab-content"><ng-content></ng-content></div>
      <ng-template add-in-host></ng-template>
    `
})
export class TabBodyComponent implements OnInit {

  @ViewChild(AddInHostDirective) adHost: AddInHostDirective;
  constructor() { }

  ngOnInit() {
  }

}