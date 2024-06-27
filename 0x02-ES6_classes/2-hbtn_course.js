class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Getter for length
  get length() {
    return this._length;
  }

  // Setter for length
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  // Getter for students
  get students() {
    return this._students;
  }

  // Setter for students
  et students(students) {
    if (students instanceof Array) {
      this._students = students;
    } else {
      throw new TypeError('Students must be an Array');
    }
  }

  get students() {
    return this._students;
  }
}

export default HolbertonCourse;
