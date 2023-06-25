//complete this code
class Person {
	
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	function getter(){
		return this.name;
	}
	function setter(age){
		this.age = age;
	}
}

class Student extends Person {
		function study(){
			console.log(`${this._name} is studying.`);
		}
}

class Teacher extends Person {
	function teach(){
			console.log(`${this._name} is teaching.`);
		}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
