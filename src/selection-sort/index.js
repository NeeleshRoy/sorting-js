import { getMin, getMax } from '../utils/maxMin';

export function selectionSort(unsorted, type = 'a') {
  if (unsorted.length === 0) return unsorted;
  const arr = unsorted;
  const sorted = [];
  while (arr.length > 0) {
    if (type === 'd') {
      const max = getMax(arr);
      arr.forEach((element, index) => {
        if (element === max) {
          sorted.push(element);
          arr.splice(index, arr.length);
        }
      });
    } else {
      const min = getMin(arr);
      arr.forEach((element, index) => {
        if (element === min) {
          sorted.push(element);
          arr.splice(index, arr.length);
        }
      });
    }
  }
  return sorted;
}
