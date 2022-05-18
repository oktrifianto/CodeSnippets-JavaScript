// Example from 
// @see https://medium.com/@apalshah/javascript-class-difference-between-es5-and-es6-classes-a37b6c90c7f8

/** ------------
 * Person class.
 * -------------
 * 
 * @param {string}  name
 * @param {number}  age
 * @param {string}  gender
 */
class Person {
  constructor(name, age, gender) {
    this.name   = name;
    this.age    = age;
    this.gender = gender;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return `${this.name} is ${this.age} years old`;
  }
}

// instance class
const p1 = new Person('Ton', 34, 'male');
const p2 = new Person('Can', 32, 'female');
console.log(p1.getName());
console.log(p2.getAge());
console.log('----------------------');

/** -------------
 * Student class.
 * --------------
 * 
 * @param {string}  name
 * @param {number}  age
 * @param {string}  gender
 * @param {string}  marks
 */
class Student extends Person {
  constructor(name, age, gender, marks){
    super(name, age, gender);
    this.marks = marks;
  }

  getMarks() {
    return `${this.name} has mark : ${this.marks}`;
  }
}

const s1 = new Student('Sherly', 14, 'female', 'A');
const s2 = new Student('Sai', 15, 'male', 'B');
const s3 = new Student('Don', 14, 'male', 'A+');
console.log(s1.getMarks());
console.log(s2.getMarks());
console.log(s2.getAge()); // method called from parent class
console.log(s3.getMarks());
console.log('----------------------');


/** -------------
 * Teacher class.
 * --------------
 * 
 * @param {string}  name 
 * @param {number}  age
 * @param {string}  gender
 * @param {string}  subject
 */
class Teacher extends Person {
  constructor(name, age, gender, subject) {
    super(name, age, gender);
    this.subject = subject;
  }

  getSubject() {
    let g = (this.gender == "male") ? "he" : "she";
    return `${this.name} is teach '${this.subject}' subject and ${g} is ${this.gender} teacher.`;
  }
}

const t1 = new Teacher('Ai', 45, 'female', 'Math');
const t2 = new Teacher('Koi', 41, 'male', 'English');
const t3 = new Teacher('Mia', 34, 'female', 'Computer');

console.log(t1.getSubject());
console.log(t2.getSubject());
console.log(t3.getSubject());
console.log('----------------------');