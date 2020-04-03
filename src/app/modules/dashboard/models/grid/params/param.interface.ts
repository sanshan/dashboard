import {controlTypes, gridParams} from './param.enum';

/**
 * Интерфейс базового параметра грида
 */
export interface GridBaseParamInterface {
  controlType: keyof typeof controlTypes;
  paramName: keyof typeof gridParams;
  labelText?: string;
  additionalText?: string;
  value: number | string | boolean;
  default: number | string | boolean;
  options?: { key: string, value: string }[];
  access?: string[];
}

/**
 * Интерфейс выпадающего списка для параметра грида
 */
export interface GridSelectParamInterface extends GridBaseParamInterface {
  controlType: 'Select';
  value: number;
  default: number;
  options: { key: string, value: string }[];
}

/**
 * Интерфейс чекбокса для параметра грида
 */
export interface GridCheckboxParamInterface extends GridBaseParamInterface {
  controlType: 'Checkbox';
  value: boolean;
  default: boolean;
}

/**
 * Интерфейс текстового поля ввода для параметра грида
 */
export interface GridInputTextParamInterface extends GridBaseParamInterface {
  controlType: 'InputText';
  value: string;
  default: string;
}

/**
 * Интерфейс цифрового поля ввода для параметра грида
 */
export interface GridInputNumberParamInterface extends GridBaseParamInterface {
  controlType: 'InputNumber';
  value: number;
  default: number;
}

/**
 * Интерфейс группы параметров для грида
 */
export interface GridParamGroupInterface {
  title: string;
  controls: GridBaseParamInterface[];
}

/**
 * Тип для конфига GRID_CONTROL_COMPONENTS
 */
export type GridControlComponents<T> = {
  [key in keyof typeof controlTypes]: T
};
