//complete this code
class Person {
	let name="";
	let age="";
	Constructor(name,age){
		this.name=name;
		this.age=age;
	}
	function getter(){
		return name;
	}
	function setter(){
		this.age = age;
	}
}

class Student extends Person {
		function study(){
			return (this.name, is studying);
		}
}

class Teacher extends Person {
	function teach(){
			return (this.name, is teaching);
		}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
