export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name instanceof String ? name : "string";
    this._length = length instanceof String ? length : "length";
    this._students = students instanceof Array ? students : "students";

    if (this._name === "string") {
      throw new TypeError("Name must be a string");
    }
    if (this._length === "length") {
      throw new TypeError("Length must be a number");
    }
    if (this._students === "students") {
      throw new TypeError("Students must be an Array");
    }
  }

  get name() {
    return this._name;
  }
  get length() {
    return this._length;
  }
  get students() {
    return this._students;
  }

  set name(value) {
    this._name = value instanceof String ? value : "string";
    if (this._name === "string") {
      throw new TypeError("Name must be a string");
    }
  }
  set length(value) {
    this._length = value instanceof Number ? value : "number";
    if (this._name === "number") {
      throw new TypeError("Length must be a number");
    }
  }
  set students(value) {
    this._students = value instanceof Array ? value : "array";
    if (this._students === "array") {
      throw new TypeError("Students must be an array");
    }
  }
}
