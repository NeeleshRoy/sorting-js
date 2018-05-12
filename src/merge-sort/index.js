function stitch(left, right) {
  const results = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  while (left.length) {
    results.push(left.shift());
  }

  while (right.length) {
    results.push(right.shift());
  }

  return results;
}

export const mergeSort = (arr) => {
  const unsorted = arr;
  if (unsorted.length < 2) {
    return unsorted;
  }

  const length = unsorted.length;
  const middle = Math.floor(length / 2);
  const left = unsorted.slice(0, middle);
  const right = unsorted.slice(middle, length);

  return stitch(mergeSort(left), mergeSort(right));
};
