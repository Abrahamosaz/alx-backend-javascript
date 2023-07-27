export default class HolbertonCourse {
  constructor(name, length, students) {
    if (name instanceof String) {
      this._name = name;
    } else {
      new TypeError("Name must be a string");
    }
    if (length instanceof Number) {
      this._length = length;
    } else {
      new TypeError("Length must be a number");
    }
    if (students instanceof Array) {
      this._students = students;
    } else {
      new TypeError("Student must be an Array");
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

  set name(name) {
    if (name instanceof String) {
      this._name = name;
    } else {
      new TypeError("Name must be a string");
    }
  }

  set length(length) {
    if (length instanceof Number) {
      this._length = length;
    } else {
      new TypeError("Length must be a number");
    }
  }

  set students(students) {
    if (students instanceof Array) {
      this._students = students;
    } else {
      new TypeError("Student must be an Array");
    }
  }
}
