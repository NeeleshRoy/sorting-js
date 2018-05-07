export function insertionSort(arr) {
  const unsorted = arr;
  let temp, inner;
  
  for (let outer = 1; outer <= unsorted.length-1; ++outer) {
    temp = unsorted[outer];
    inner = outer;
    while (inner > 0 && (unsorted[inner-1] >= temp)) {
      unsorted[inner] = unsorted[inner-1];
      --inner;
    }
    unsorted[inner] = temp;
  }
  return unsorted;
}