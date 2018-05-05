export class ArrayTestBed {
  constructor(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
  }

  setData(random = true) {
    for (let i = 0; i < this.numElements; i++) {
      let randomNumber = this.getRandomNumber();
      if (random) {
        while(this.dataStore.indexOf(randomNumber) > -1) {
          randomNumber = this.getRandomNumber();
        }
        this.dataStore[i] = randomNumber;
      } else {
        this.dataStore[i] = randomNumber;
      }
    }
  }

  getRandomNumber() {
    return Math.floor(Math.random() *
    Math.pow(10, this.numElements.toString().length - 1) + 1);
  }

  getData() {
    return this.dataStore;
  }
}
