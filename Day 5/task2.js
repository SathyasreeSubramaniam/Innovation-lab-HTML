const student = {
  name: "Sathya",
  age: 19,
  course: "CT",
  display() {
    console.log(${this.name}, ${this.age}, ${this.course});
  }
};

student.display();           
student.age = 21;            
student.grade = "A";         

student.showGrade = function() {
  console.log(Grade: ${this.grade});
};

student.showGrade();         