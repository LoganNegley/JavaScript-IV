// CODE here for your Lambda Classes

//Parent constructor
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }
  speak() {
    return `Hello my name is ${this.name} I am from ${this.location}`;
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
    return `{student.name} receives a perfect score on ${subject}`;
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
    return `${this.name} debugs ${studentObj.name} code on ${subject}`;
  }
}

const leader = new TeamLead({
  name: "Joey",
  age: 56,
  location: "Cali",
  gradClassName: "Computer Science",
  favInstructor: "Josh Knoll"
});

const student1 = new Student({
  name: "Logan",
  age: 30,
  location: "Texas",
  previouseBackground: "EMT",
  className: "WEBPT11",
  favSubject: ["CSS", "HTML", "JS"]
});

console.log(leader.debugCode(student1, "CSS"));
