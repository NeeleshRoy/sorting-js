export const quickSort = (arr) => {
  const unsorted = arr;

  if (unsorted.length <= 1) {
    return unsorted;
  }

  const pivot = unsorted[unsorted.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < unsorted.length - 1; i++) {
    if (unsorted[i] < pivot) {
      left.push(unsorted[i]);
    } else {
      right.push(unsorted[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
};
