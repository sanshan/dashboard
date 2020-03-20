/**
 * Объединение объектов коллекции в один объект
 *
 * @param acc Аккамулятор
 * @param object Объект коллекции
 */
export function collectionReducer(acc: object, object: object) {
  return {...acc, ...object};
}

