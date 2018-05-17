export const insertionSort = (arr) => {
	const unsorted = arr;

	for (let i = 1; i < unsorted.length; i++) {
		for (let j = 0; j < i; j++) {
			if (unsorted[i] < unsorted[j]) {
				const spliced = unsorted.splice(i, 1);
				unsorted.splice(j, 0, spliced[0]);
			}
		}
	}

	return unsorted;
};
