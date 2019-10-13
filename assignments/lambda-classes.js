// CODE here for your Lambda Classes

//Parent constructor
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }
  speak() {
    return `Hello my name is ${this.name} and I am from ${this.location}`;
  }
}
//Child of person
class Instructor extends Person {
  constructor(instructorAttributes) {
    super(instructorAttributes);
    this.specialty = instructorAttributes;
    this.favLanguage = instructorAttributes;
    this.catchPhrase = instructorAttributes;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(studentObj, subject) {
    return `${studentObj.name} receives a perfect score on ${subject}`;
  }
}

//Child of person
class Student extends Person {
  constructor(studentAttributes) {
    super(studentAttributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
  }
  listsSubjects() {
    return this.favSubjects;
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}
//Grandchild of person- child of instructor
class TeamLead extends Instructor {
  constructor(tlAttributes) {
    super(tlAttributes);
    this.gradClassName = tlAttributes.gradClassName;
    this.favInstructor = tlAttributes.favInstructor;
  }
  standUp(channel) {
    `${this.name} announces to ${channel} time for standup! `;
  }

  debugCode(studentObj, subject) {
    return `${this.name} debugs ${studentObj.name}'s code on ${subject}`;
  }
}

//Team leads
const TL1 = new TeamLead({
  name: "Joey",
  age: 56,
  location: "Cali",
  gradClassName: "Computer Science",
  favInstructor: "Josh Knoll"
});

const TL2 = new TeamLead({
  name: "Lindsey",
  age: 28,
  location: "New York",
  gradClassName: "Bachelor of Science",
  favInstructor: "Pace Ellsworth"
});

//Insturctos
const instructor1 = new Instructor({
  name: "Morgan",
  age: 26,
  location: "Philly",
  specialty: "Javascript",
  favLanguage: "CSS",
  catchPhrase: "Let's Go!"
});

const instructor2 = new Instructor({
  name: "John",
  age: 37,
  location: "Florida",
  specialty: "React",
  favLanguage: "React",
  catchPhrase: "Let's Get It!"
});
//Student
const student1 = new Student({
  name: "Logan",
  age: 30,
  location: "Texas",
  previouseBackground: "EMT",
  className: "WEBPT11",
  favSubjects: ["CSS", "HTML", "JS"]
});

const student2 = new Student({
  name: "Heahter",
  age: 31,
  location: "Texas",
  previouseBackground: "Cook",
  className: "WEBPT11",
  favSubjects: ["CSS", "HTML", "React"]
});
//TL Logs
console.log(TL1.debugCode(student1, "CSS"));
console.log(TL2.demo("HTML"));
//Students logs
console.log(student1.speak());
console.log(student2.listsSubjects());
//Instructors logs
console.log(instructor1.grade(student1, "Javascript"));
console.log(instructor2.speak());
