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
}

const myArrayPrototype = new MyArrayPrototype();

MyArray.prototype = myArrayPrototype;

const myArray2 = new MyArray();
myArray2.push(5);
myArray2.push(12);


myArray2.forEach(callback);
function callback(value, index, arr) {
  console.log(value);
}

const result = myArray2.map(func);
function func(value, index, arr) {
  return (value*2);
}
