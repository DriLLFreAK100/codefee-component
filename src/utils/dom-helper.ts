/**
 * Foreach wrapper for HTMLCollection
 * @param htmlCollection HTMLCollection
 * @param func Handler method for each of the item in the collection
 */
export const forEachHtmlCollection = (
  htmlCollection: HTMLCollection,
  func: (el: Element, index: number) => void,
): void => {
  for (let index = 0; index < htmlCollection.length; index++) {
    const el = htmlCollection.item(index);
    func && func(el, index);
  }
};

/**
 *
 * Filter wrapper for HTMLCollection
 * @param htmlCollection HTMLCollection
 * @param func Handler method to evaluate of each item in the collection
 */
export const filterHtmlCollection = <T>(
  htmlCollection: HTMLCollection,
  func: (el: Element, index: number) => boolean,
): T[] => {
  const arr = [];

  for (let index = 0; index < htmlCollection.length; index++) {
    const el = htmlCollection.item(index);
    if (func && func(el, index)) {
      arr.push(el);
    }
  }

  return arr;
};
