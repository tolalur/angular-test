import { Component, Input } from '@angular/core';
import { AddComponent } from 'src/app/add-component-interface';

@Component({
  selector: 'tab-body-data',
  template: 
      `
      <div class="tab-body-data">{{data}}/div>
    `
})
export class TabBodyDataComponent implements AddComponent {

  @Input() data: any;

}