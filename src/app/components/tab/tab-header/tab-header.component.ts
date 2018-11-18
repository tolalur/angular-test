import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tab-title',
  template:
    `
      <div class="tab-header"><ng-content></ng-content></div>
      <ng-template add-in-host></ng-template>
    `
})
export class TabHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}