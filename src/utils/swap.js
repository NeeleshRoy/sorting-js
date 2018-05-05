export default function swap(arr, index1, index2) {
  const arrTemp = arr;
  const temp = arrTemp[index1];
  arrTemp[index1] = arrTemp[index2];
  arrTemp[index2] = temp;
  return arrTemp;
}
