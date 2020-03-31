/**
 * Объединение объектов коллекции в один объект
 *
 * @param acc Аккамулятор
 * @param object Объект коллекции
 */
export function collectionReducer(acc: object, object: object) {
  return {...acc, ...object};
}

export function merge(obj1: any, obj2: any, properties: any) {
  for (const p in obj2) {
    if (obj2[p] !== void 0 && properties.hasOwnProperty(p)) {
      if (typeof obj2[p] === 'object') {
        obj1[p] = merge(obj1[p], obj2[p], properties[p]);
      } else {
        obj1[p] = obj2[p];
      }
    }
  }

  return obj1;
}

