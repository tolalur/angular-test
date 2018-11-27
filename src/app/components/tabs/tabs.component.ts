import { Component, Input, QueryList, ContentChildren } from '@angular/core';
import { TabComponent } from '../tab/tab.component'

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styles: [`div {margin-top: 10px;}`]
})
export class TabsComponent {

  @Input()
  @ContentChildren(TabComponent) tabComponents: QueryList<TabComponent>;
  
}