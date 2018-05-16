export const countingSort = (unsorted, min, max) => {
	const arr = unsorted;
	let i = 0;
	let z = 0;
	const count = [];

	for (i = min; i <= max; i++) {
		count[i] = 0;
	}

	for (i = 0; i < arr.length; i++) {
		count[arr[i]]++;
	}

	for (i = min; i <= max; i++) {
		while (count[i]-- > 0) {
			arr[z++] = i;
		}
	}
	return arr;
};
