import { Component, OnInit, Input, ViewChildren, AfterViewInit, ViewContainerRef, QueryList, ViewChild, ContentChildren } from '@angular/core';
import { TabComponent } from '../tab/tab.component'

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styles: [`div {margin-top: 10px;}`]
})
export class TabsComponent implements OnInit, AfterViewInit {

  @Input()showTab: boolean;

  @ContentChildren (TabComponent) tabComponents: QueryList<TabComponent>;

  constructor() {
    this.showTab = true;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

}