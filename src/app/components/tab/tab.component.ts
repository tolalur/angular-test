import { Component, OnInit, Input, ViewChild, ContentChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'tab',
  template: `<div class="tab" *ngIf="show"><ng-content></ng-content></div>`,
  styles: [`.tab{margin-bottom: 10px;}`]
})
export class TabComponent implements OnInit, AfterViewInit {

  @Input() header: any;
  @Input() body: any;
  _show: boolean;
  @Input() set show(val) {
    this._show = val;
    this.cdr.detectChanges();
  }
  get show() {
    return this._show;
  }

  @ViewChild(TabComponent) selfTabComponent: TabComponent;
  @ContentChild(TabComponent) htmlTabComponent: TabComponent;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.show = false;
  }

  ngAfterViewInit() {
  }

}