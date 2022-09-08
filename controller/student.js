const db = require("../repository/studentsRepository.js");

class StudentsController {
  // Get Questions
  getAllStudents() {
    return db.getAllStudents();
  }

  // Add question to the list
  addStudent(student) {
    if (!student.name) throw "student has no name";
    return db.addStudent(student);
  }

  deleteStudent(id) {
    return db.deleteStudent(id);
  }

  getStudent(id) {
    return db.getStudentById(id);
  }

  updateStudent(studnt) {
    return db.put(studnt);
  }
}

module.exports = new StudentsController();
