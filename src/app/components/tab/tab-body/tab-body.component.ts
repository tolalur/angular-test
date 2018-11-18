import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tab-content',
  template: 
      `
      <div class="tab-content"><ng-content></ng-content></div>
      <ng-template add-in-host></ng-template>
    `
})
export class TabBodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}