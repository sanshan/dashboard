import {ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, ViewContainerRef} from '@angular/core';
import {Chart3Component} from './chart3/chart3.component';
import {Chart2Component} from './chart2/chart2.component';
import {Chart1Component} from './chart1/chart1.component';

const components = {
  Chart1Component,
  Chart2Component,
  Chart3Component
};

@Directive({
  selector: '[appDynamicDashboardItem]'
})
export class DynamicDashboardItemDirective implements OnChanges {
  @Input() componentRef: string;
  component: ComponentRef<any>;

  constructor(
    private container: ViewContainerRef,
    private resolver: ComponentFactoryResolver
  ) {
  }

  ngOnChanges(): void {
    const component = components[this.componentRef];

    if (component) {
      const factory = this.resolver.resolveComponentFactory<any>(component);
      this.component = this.container.createComponent(factory);
    }
  }

}
