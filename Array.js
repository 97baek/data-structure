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
    this.data[this.length++] = item;
  }

  pop() {
    if (this.length < 1) {
      return false;
    } else {
      this.data.length = this.length - 1;
      this.length--;

      return this.data;
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
myArray1.pop();
console.log(myArray1);

// myArray2.push(41);
// myArray2.push(3);
// myArray2.push(17);
// myArray2.push(9);
