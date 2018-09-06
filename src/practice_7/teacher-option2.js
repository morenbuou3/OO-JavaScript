import Person from "./person";

class Teacher extends Person{
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }

    introduce() {
        if (this.klass) {
            return super.introduce() + ` I am a Teacher. I teach ${this.klass.getDisplayName()}.`;
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




