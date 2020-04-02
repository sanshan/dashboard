import {Type} from '@angular/core';

export type ID = number | string;

export interface ComponentListInterface<T> {
  [key: string]: Type<T>;
}
