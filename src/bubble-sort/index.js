import swap from '../utils/swap';

export const bubbleSort = (unsorted, type = 'a') => {
	if (unsorted.length === 0) return unsorted;
	const r = unsorted;
	let p = r.length;

	while (p !== 0) {
		let swapped = false;
		r.forEach((val, index) => {
			if (r[index + 1] && r[index + 1] < val && type === 'a') {
				swap(r, index, index + 1);
				swapped = true;
			}

			if (r[index + 1] && r[index + 1] > val && type === 'd') {
				swap(r, index + 1, index);
				swapped = true;
			}
		});
		if (!swapped) {
			break;
		}
		--p;
	}
	return r;
};
