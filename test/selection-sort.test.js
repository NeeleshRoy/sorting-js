/**
 * sorting-js
 *
 * Copyright © 2018 Neelesh Roy. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import { selectionSort } from '../src/selection-sort';

describe('Selection Sort', () => {

  describe('Selection - function', () => {

    it('Should return the empty array', () => {
      const test = [];
      const out = selectionSort(test);

      expect(out).to.eql([]);
    });

    it('Should sort the array in ascending order', () => {
      const test = [8, 6, 5, 3, 5, 2, 1];
      const out = selectionSort(test);

      expect(out).to.eql([1, 2, 3, 5, 6, 8]);
    });

    it('Should sort the array in descensing order', () => {
      const test = [1, 2, 3, 4, 5];
      const out = selectionSort(test, 'd');

      expect(out).to.eql([5, 4, 3, 2, 1]);
    });

  });
});
