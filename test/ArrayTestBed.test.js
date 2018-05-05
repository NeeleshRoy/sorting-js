/**
 * sorting-js
 *
 * Copyright © 2018 Neelesh Roy. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import { ArrayTestBed } from '../src/utils/ArrayTestBed';

describe('ArrayTestBed', () => {

  describe('ArrayTestBed - class and properties', () => {

    it('Should have the properties', () => {
      const test = new ArrayTestBed(100);

      expect(test.dataStore).to.exist;
      expect(test.pos).to.exist;
      expect(test.numElements).to.exist;

      expect(test.dataStore).to.eql([]);
      expect(test.pos).to.eql(0);
      expect(test.numElements).to.eql(100);
    });

  });

  describe('ArrayTestBed - setRandomData()', () => {

    it('Should not make any change in datastore', () => {
      const test = new ArrayTestBed(0);
      test.setData();

      expect(test.dataStore).to.eql([]);
    });

    it('Should set random unique data in datastore', () => {
      const test = new ArrayTestBed(10);
      test.setData();

      expect(test.dataStore.length).to.eql(10);
    });

    it('Should set random data in datastore', () => {
      const test = new ArrayTestBed(10);
      test.setData(false);
      console.log(test.dataStore);
      expect(test.dataStore.length).to.eql(10);
    });

  });

  describe('ArrayTestBed - getNumbers()', () => {

    it('Should return and empty array', () => {
      const test = new ArrayTestBed(0);
      const out = test.getData();

      expect(out).to.eql([]);
    });

    it('Should get the random data from the datastore', () => {
      const test = new ArrayTestBed(10);
      test.setData();
      const out = test.getData();
      
      expect(out.length).to.eql(10);
    });

  });

});
