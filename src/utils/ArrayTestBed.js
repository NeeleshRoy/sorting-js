export class ArrayTestBed {
  constructor(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
  }

  setRandomData() {
    for (let i = 0; i < this.numElements; i++) {
      this.dataStore[i] = Math.floor(Math.random() *
      Math.pow(10, this.numElements.toString().length - 1) + 1);
    }
  }

  setRandomUniqueData() {
    let i = 0;
    while (i < this.numElements) {
      const number = Math.floor(Math.random() *
      Math.pow(10, this.numElements.toString().length) - 1) + 1;
      if (this.dataStore.indexOf(number) > -1) {
        this.dataStore[i] = number;
        ++i;
      }
    }
  }

  getNumbers() {
    return this.dataStore;
  }
}
