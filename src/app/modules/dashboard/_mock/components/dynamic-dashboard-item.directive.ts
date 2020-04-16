import {ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, ViewContainerRef} from '@angular/core';
import {Chart2Component} from './chart2/chart2.component';
import {Chart4Component} from './chart4/chart4.component';
import {ID} from '../../../_shared/interfaces/interfaces';

const components = {
  Chart2Component,
  Chart4Component,
};

@Directive({
  selector: '[appDynamicDashboardItem]'
})
export class DynamicDashboardItemDirective implements OnChanges {
  @Input() componentRef: string;
  @Input() id: ID;
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

      /** передаю параметры в компонент */
      this.component.instance.id = this.id;
    }
  }

}
