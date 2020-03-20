import {ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit, ViewContainerRef} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {GridBaseParamInterface} from '../../models/grid/params/param.interface';
import {ControlInterface} from '../../models/grid/controls/control.interface';
import {GRID_CONTROL_COMPONENTS} from '../../config/grid';


@Directive({
  selector: '[appDynamicField]',
})
export class DynamicFieldDirective implements OnInit {

  /** Объект с параметрами контрола */
  @Input() param: GridBaseParamInterface;
  /** Группа реактивной формы в которой находится контрол */
  @Input() form: FormGroup;
  /** Ссылка на компонент с контролом */
  component: ComponentRef<ControlInterface>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {
  }

  ngOnInit(): void {
    /** Получаю название компонента по полю controlType(из объекта с входящими параметрами) из конфига) */
    const component = GRID_CONTROL_COMPONENTS[this.param.controlType];

    /** Создаю компонент */
    const factory = this.resolver.resolveComponentFactory<ControlInterface>(component);
    this.component = this.container.createComponent<ControlInterface>(factory);

    /** передаю параметры в компонент */
    this.component.instance.param = this.param;
    this.component.instance.form = this.form;
  }

}
