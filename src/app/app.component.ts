import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { TabsComponent } from './components/tabs/tabs.component'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  _visible: boolean;
  set visible(val) {
    this._visible = val;
    if (val) {
      this.thirdVisible();
    } else {
      this.thirdHide();
    }
  }
  get visible() {
    return this._visible;
  }
  tabs = [1,2];
  selected: number;
  
  @ViewChild(TabsComponent) tabsComponent: TabsComponent;

  constructor(private cdr: ChangeDetectorRef) {
    
  }
   
  ngOnInit() {
  }
  
  ngAfterViewInit() {
    this.tabsComponent.tabComponents.first.show = true;
  }

  onTabSelect(index) {
    this.tabsComponent.tabComponents
    .forEach((item, i) => item.show = i == index ? true : false)
  }

  thirdVisible() {
    this.tabs.push(3);
  }
  thirdHide() {
    this.tabs = this.tabs.slice(-1);
  }
}
