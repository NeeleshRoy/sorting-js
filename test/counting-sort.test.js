/**
 * sorting-js
 *
 * Copyright © 2018 Neelesh Roy. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import { countingSort } from '../src/counting-sort/index';

describe('Counting Sort', () => {
	describe('Counting Sort - function', () => {
		it('should return empty array', () => {
			const test = [];

			const out = countingSort(test, 0, 0);

			expect(out).to.eql([]);
		});

		it('should sort the elements in ascending order', () => {
			const test = [ 2, 5, 4, 10, 5, 3, 2, 7 ];

			const out = countingSort(test, 2, 10);

			expect(out).to.eql([ 2, 2, 3, 4, 5, 5, 7, 10 ]);
		});

		it('should sort the unique numbers in ascending order', () => {
			const test = [ 2, 5, 4, 10, 6, 18, 98, 54 ];

			const out = countingSort(test, 2, 98);

			expect(out).to.eql([ 2, 4, 5, 6, 10, 18, 54, 98 ]);
		});
	});
});
