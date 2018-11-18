import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tab/tab.component';
import { AddInHostDirective } from './add-in-host.directive';
import { TabHeaderComponent } from './components/tab/tab-header/tab-header.component';
import { TabBodyComponent } from './components/tab/tab-body/tab-body.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TabsComponent, TabComponent, AddInHostDirective, TabHeaderComponent, TabBodyComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
