const student = {
  name: "Sathya",
  age: 19,
  course: "CT",
  displayInfo() {
    console.log(${this.name}, ${this.age}, ${this.course});
  }
};

student.displayInfo();         
console.log(student.name);     
student.age = 21;              
student.grade = "A";           

student.getGrade = function() {
  console.log(Grade: ${this.grade});
};

student.getGrade();            