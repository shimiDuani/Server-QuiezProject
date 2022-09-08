const fs = require("fs");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);
const jsonFileName = "./data/student.json";

class StudentsRepository {
  async getAllStudents() {
    const data = JSON.parse(await readFile(jsonFileName));
    return data;
  }

  async addStudent(student) {
    let data = JSON.parse(await readFile(jsonFileName));
    const biggestId = Math.max.apply(
      Math,
      data.map((student) => student.id)
    );
    console.log(biggestId);
    student.id = biggestId + 1;
    data.push(student);
    await writeFile(jsonFileName, JSON.stringify(data));
    return student;
  }

  async deleteStudent(id) {
    let data = JSON.parse(await readFile(jsonFileName));
    const parsedID = parseInt(id);
    let allStudents = data.filter((student) => student.id !== parsedID);
    await writeFile(jsonFileName, JSON.stringify(allStudents));
    return id;
  }

  async getStudentById(id) {
    let data = JSON.parse(await readFile(jsonFileName));
    const parsedID = parseInt(id);
    let student = data.find((student) => student.id === parsedID);
    await writeFile(jsonFileName, JSON.stringify(data));
    return student;
  }
  async put(updateStudent) {
    let data = JSON.parse(await readFile(jsonFileName));
    const student = data.find((x) => x.id === updateStudent.id);
    if (!student) throw "No student by this id";
    student.name = updateStudent.name ?? student.name;
    student.email = updateStudent.email ?? student.email;
    await writeFile(jsonFileName, JSON.stringify(data));
    return student;
  }
}

module.exports = new StudentsRepository();
