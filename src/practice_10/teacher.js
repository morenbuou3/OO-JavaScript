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
}

export default Teacher;






