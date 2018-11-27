import { Component, ViewChild, AfterViewInit, ComponentFactoryResolver } from '@angular/core';
import { TabsComponent } from './components/tabs/tabs.component'
import { TabBodyDataComponent } from './components/tab-body-data/tab-body-data.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  _visible: boolean;

  set visible(val) {
    this._visible = val;
    if (val) {
      this.thirdVisible();
    } else {
      this.thirdHide();
      this.onTabSelect(0);
    }
  }

  get visible() {
    return this._visible;
  }

  tabs = [1, 2];

  @ViewChild(TabsComponent) tabsComponent: TabsComponent;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngAfterViewInit() {
    this.tabsComponent.tabComponents.first.show = true;
    console.log('this.tabs :', this.tabsComponent);
    const num = this.getRandomArbitrary(1,3);
    if (!!num) {
      const comp = this.getBodyComponent();
      console.log('comp :', comp);
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(comp);

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
    }

  }

  onTabSelect(index) {
    this.tabsComponent.tabComponents
      .forEach((item, i) => item.show = i == index)
  }

  thirdVisible() {
    this.tabs.push(3);
  }

  thirdHide() {
    this.tabs.splice(-1, 1);
  }
  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  getBodyComponent() {
    const comp = new TabBodyDataComponent();
    comp.data = 'Some Body data';
    return comp;
  }
}
