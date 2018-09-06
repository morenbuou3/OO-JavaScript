class klass {
    constructor(number) {
        this.number = number;
    }

    getDisplayName() {
        return `Class ${this.number}`;
    }

    assignLeader(student) {
        if (student.klass.number === this.number) {
            this.leader = student;
            if (this.assignLeaderListener) {
                this.assignLeaderListener.introduceLeader(student, this);
            }
        } else {
            console.log('It is not one of us.');
        }
    }

    appendMember(student) {
        student.klass = this;
        if (this.joinListener) {
            this.joinListener.introduceMember(student, this);
        }
    }

    isIn(student) {
        return student.klass === this;
    }

    registerAssignLeaderListener(teacher) {
        this.assignLeaderListener = teacher;
    }

    registerJoinListener(teacher) {
        this.joinListener = teacher;
    }
}

export default klass;




