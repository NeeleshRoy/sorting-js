/**
 * sorting-js
 *
 * Copyright © 2018 Neelesh Roy. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import bubbleSort from '../src/bubble-sort';

describe('Bubble Sort', () => {

  describe('BubbleSort - function', () => {

    it('should return empty array', () => {
      const test = [];

      const out = bubbleSort(test);

      expect(out).to.eql([]);
    });

    it('should sort the elements in ascending order', () => {
      const test = [2, 5, 4, 10, 5, 3, 2, 7];

      const out = bubbleSort(test, 'a');

      expect(out).to.eql([2, 2, 3, 4, 5, 5, 7, 10]);
    });

    it('should sort the elements in ascending order', () => {
      const test = [2, 5, 4, 10, 5, 3, 2, 7];

      const out = bubbleSort(test, 'd');

      expect(out).to.eql([10, 7, 5, 5, 4, 3, 2, 2]);
    });

  });
});
