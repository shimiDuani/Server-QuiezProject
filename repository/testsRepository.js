const fs = require("fs");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);
const jsonFileName = "./data/test.json";

class TestsRepository {
  async getAllTests() {
    const data = JSON.parse(await readFile(jsonFileName));
    return data;
  }

  async addTest(test) {
    let data = JSON.parse(await readFile(jsonFileName));
    const biggestId = Math.max.apply(
      Math,
      data.map((test) => test.id)
    );
    console.log(biggestId);
    test.id = biggestId + 1;
    data.push(test);
    await writeFile(jsonFileName, JSON.stringify(data));
    return test;
  }

  async deleteTest(id) {
    let data = JSON.parse(await readFile(jsonFileName));
    const parsedID = parseInt(id);
    let allTests = data.filter((test) => test.id !== parsedID);
    await writeFile(jsonFileName, JSON.stringify(allTests));
    return id;
  }

  async getTestById(id) {
    let data = JSON.parse(await readFile(jsonFileName));
    const parsedID = parseInt(id);
    let test = data.find((test) => test.id === parsedID);
    await writeFile(jsonFileName, JSON.stringify(data));
    return test;
  }
  async put(updateTest) {
    let data = JSON.parse(await readFile(jsonFileName));
    const test = data.find((x) => x.id === updateTest.id);
    if (!test) throw "No test by this id";
    test.name = updateTest.name ?? test.name;
    test.tag = updateTest.tag ?? test.tag;
    test.date = updateTest.date ?? test.date;
    test.passingGrade = updateTest.passingGrade ?? test.passingGrade;
    test.language = updateTest.language ?? test.language;
    test.Questions = updateTest.Questions ?? test.Questions;
    await writeFile(jsonFileName, JSON.stringify(data));
    return test;
  }
}

module.exports = new TestsRepository();
