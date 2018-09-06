import Person from "./person";

class Teacher extends Person{
    constructor(id, name, age, klasses) {
        super(id, name, age);
        this.klasses = klasses;
    }

    introduce() {
        if (this.klasses) {
            return super.introduce() + ` I am a Teacher. I teach Class ${this.klasses.map(n => n.number).join(", ")}.`;
        }
        return super.introduce() + ` I am a Teacher. I teach No Class.`;
    }

    introduceWith(student) {
        if (student.klass === this.klass) {
            return super.introduce() + ` I am a Teacher. I teach ${student.name}.`;
        }
        return super.introduce() + ` I am a Teacher. I don't teach ${student.name}.`;
    }

    introduceLeader(student, klass) {
        let message = `I am ${this.name}. I know ${student.name} become Leader of Class ${klass.number}.`;
        console.log(message);
    }

    introduceMember(student, klass) {
        let message = `I am ${this.name}. I know ${student.name} has joined Class ${klass.number}.`;
        console.log(message);
    }

    isTeaching(student) {
        return this.klasses ? this.klasses.filter(n => n.isIn(student)).length() !== 0 : false;
    }
}

export default Teacher;







