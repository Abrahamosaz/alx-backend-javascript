export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = typeof name === "string" ? name : "string";
    this._length = typeof length === "number" ? length : "number";
    this._students = Array.isArray(students) ? students : "array";

    if (this._name === "string") {
      throw new TypeError("Name must be a string");
    }
    if (this._length === "number") {
      throw new TypeError("Length must be a number");
    }
    if (this._students === "array") {
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
    this._name = typeof value === "string" ? value : "string";
    if (this._name === "string") {
      throw new TypeError("Name must be a string");
    }
  }
  set length(value) {
    this._length = typeof value === "number" ? value : "number";
    if (this._name === "number") {
      throw new TypeError("Length must be a number");
    }
  }
  set students(value) {
    this._students = Array.isArray(value) ? value : "array";
    if (this._students === "array") {
      throw new TypeError("Students must be an array");
    }
  }
}
