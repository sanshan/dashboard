import {
  GridBaseParamInterface,
  GridCheckboxParamInterface,
  GridInputNumberParamInterface,
  GridInputTextParamInterface,
  GridParamGroupInterface,
  GridSelectParamInterface
} from './param.interface';
import {controlTypes, gridParams} from './param.enum';

/**
 * Базовая модель параметра
 */
class GridParam implements GridBaseParamInterface {
  paramName: keyof typeof gridParams;
  controlType: keyof typeof controlTypes;
  labelText?: string;
  additionalText?: string;
  default: number | string | boolean;
  value: number | string | boolean;

  constructor(options: GridBaseParamInterface) {
    this.paramName = options.paramName;
    this.labelText = options.labelText || '';
  }
}

/**
 * Модель параметра с выпадающим списком
 */
export class GridSelectParam extends GridParam implements GridSelectParamInterface {
  controlType: 'Select';
  value: number;
  default: number;
  options: { key: string, value: string }[];

  constructor(options: GridSelectParamInterface) {
    super(options);

    this.default = options.default || 0;
    this.options = options.options || [];
  }
}

/**
 * Модель параметра с чекбоксом
 */
export class GridCheckboxParam extends GridParam implements GridCheckboxParamInterface {
  controlType: 'Checkbox';
  value: boolean;
  default: boolean;

  constructor(options: GridCheckboxParamInterface) {
    super(options);

    this.default = options.default || false;
  }
}

/**
 * Модель параметра с текстовым полем
 */
export class GridInputTextParam extends GridParam implements GridInputTextParamInterface {
  controlType: 'InputText';
  value: string;
  default: string;

  constructor(options: GridInputTextParamInterface) {
    super(options);

    this.default = options.default || '';
  }
}

/**
 * Модель параметра с цифровым полем
 */
export class GridInputNumberParam extends GridParam implements GridInputNumberParamInterface {
  controlType: 'InputNumber';
  value: number;
  default: number;

  constructor(options: GridInputNumberParamInterface) {
    super(options);

    this.default = options.default || 0;
  }
}

/**
 * Модель группы параметров
 */
export class GridParamGroup implements GridParamGroupInterface {
  title: string;
  controls: GridBaseParamInterface[];

  constructor(options: GridParamGroupInterface) {
    this.title = options.title || '';
    this.controls = options.controls || [];
  }
}


