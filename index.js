function MyArray() {
  this.length = 0;
}

function MyArrayPrototype() {
  this.push = function (value) {
    this[this.length] = value;
    this.length++;
    return this.length;
  }
  this.pop = function () {
    let result = this[this.length - 1];
    delete this[this.length - 1];
    if (this.length > 0) {
      this.length--;
    } this.length;
    return result;
  }
  this.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  }

  this.map = function (func) {
    let result = new MyArray();
    for (let i = 0; i < this.length; i++) {


      result.push(func(this[i], i, this));

    } return result;
  }

  this.shift = function () {
    let result = this[0];
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    } delete this[this.length - 1];
    if (this.length !== 0) {
      this.length = this.length - 1;
    } else {
      this.length = 0;
    }
    return result;
  }

  this.unshift = function (...elements) {
    this.length += elements.length;
    for (let i = this.length - 1; i >= 0; i--) {
      this[i] = this[i - elements.length];
    }
    for (let i = 0; i < elements.length; i++) {
      this[i] = elements[i];
    } return this.length;

  }
  MyArray.isMyArray = function (arg) {
    return arg instanceof this;
  }
}

const myArrayPrototype = new MyArrayPrototype();

MyArray.prototype = myArrayPrototype;

const myArray2 = new MyArray();
myArray2.push(5);
myArray2.push(12);
myArray2.push(9);
myArray2.push(129);
myArray2.push(17);

myArray2.forEach(callback);
function callback(value, index, arr) {
  console.log(value);
}

const result = myArray2.map(func);
function func(value, index, arr) {
  return (value * 2);
}
