class _Array {
  constructor() {
    this.data = [];
    this.length = 0;
  }

  get(index) {
    if (index > this.length) {
      return "범위 초과";
    } else {
      return this.data[index];
    }
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  pop() {
    if (this.length < 1) {
      return false;
    } else {
      const poped = this.data.splice(this.length - 1, 1);
      this.length--;

      return poped;
    }
  }

  delete(index) {
    if (index >= this.length) {
      return false;
    } else {
      const item = this.data.splice(index, 1);
      this.length--;

      return item;
    }
  }

  insert(index, item) {
    const newArray = this.data.splice(index, 0, item);
    this.length++;

    return newArray;
  }
}

const myArray1 = new _Array();

myArray1.push(1);
myArray1.push(12);
myArray1.push(7);
myArray1.push(5);
myArray1.push(52);
myArray1.push(6);
myArray1.delete(0);
myArray1.insert(10, 10);
console.log(myArray1);

// myArray2.push(41);
// myArray2.push(3);
// myArray2.push(17);
// myArray2.push(9);
