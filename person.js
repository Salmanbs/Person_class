 class Person {
  constructor(id, firstName, lastName) {
    try {
      if (typeof id !== "number") {
        throw new error("id must be a number");
      }
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
    } catch (error) {
      console.log(error.message);
    }
  }

  fullName() {
    return `${this.firstName}  ${this.lastName}`;
  }
}

 class Course {
  constructor(name, code, teacher) {
    this.name = name;
    this.code = code;
    this.teacher = teacher;
  }

  toString() {
    console.log(
      `code : ${this.code} , name : ${this.name} teacher : ${this.teacher}`
    );
  }
}

 class Student extends Person {
  constructor(id, firstName, lastName) {
    super(id, firstName, lastName);
    this.enrolledCourses = [];
    this.coursesTaken = new Map();
  }

  addCourse(course) {
    this.enrolledCourses.push(course);
    return;
  }

  addTakenCourse(courseCode, course) {
    try {
      if (this.coursesTaken.has(courseCode)) {
        throw new Error("Course already taken");
        console.log("hi")
      }
      this.coursesTaken.set(courseCode, course);
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = {Person,Student,Course}

