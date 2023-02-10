const { Person, Student, Course } = require("./person.js");



const person1 = new Person(1, "Salman", "S");
const course1 = new Course("JavaScript", "CS101", "Salman Khan");
const course2 = new Course("Data Science", "CS102","Ameer Khan")
const student1 = new Student(2, "Sharuk", "S");

student1.addCourse(course1);
student1.addTakenCourse("CS101", course1);
student1.addTakenCourse("CS102", course2);
student1.addTakenCourse("CS101", course2);

console.log("Person:", person1);
console.log("Person1 full name:", person1.fullName());
console.log("Course:", course1);
console.log("Student:", student1);
