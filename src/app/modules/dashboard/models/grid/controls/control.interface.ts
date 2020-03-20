import {FormGroup} from '@angular/forms';
import {GridCheckboxParamInterface, GridInputNumberParamInterface, GridInputTextParamInterface, GridSelectParamInterface} from '../params/param.interface';

/**
 * Базовый интерфейс компонента динамического контрола
 */
export interface ControlInterface {
  param: any;
  form: FormGroup;
}

/**
 * Интерфейс компонента контрола с чекбоксом
 */
export interface DynamicCheckboxControlComponentInterface extends ControlInterface {
  param: GridCheckboxParamInterface;
}

/**
 * Интерфейс компонента контрола с селектом
 */
export interface DynamicSelectControlComponentInterface extends ControlInterface {
  param: GridSelectParamInterface;
}

/**
 * Интерфейс компонента контрола с текстовым вводом
 */
export interface DynamicTextInputControlComponentInterface extends ControlInterface {
  param: GridInputTextParamInterface;
}

/**
 * Интерфейс компонента контрола с цифровым вводом
 */
export interface DynamicNumberInputControlComponentInterface extends ControlInterface {
  param: GridInputNumberParamInterface;
}


