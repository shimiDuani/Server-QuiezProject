const fs = require("fs");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);
const jsonFileName = "./data/finishTest.json";

class TestsRepository {
  async getAllFinishTests() {
    const data = JSON.parse(await readFile(jsonFileName));
    return data;
  }

  async addFinishTest(test) {
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

  async deleteFinishTest(id) {
    let data = JSON.parse(await readFile(jsonFileName));
    const parsedID = parseInt(id);
    let allFinishTests = data.filter((test) => test.id !== parsedID);
    await writeFile(jsonFileName, JSON.stringify(allFinishTests));
    return id;
  }

  async getFinishTestById(id) {
    let data = JSON.parse(await readFile(jsonFileName));
    const parsedID = parseInt(id);
    let test = data.find((test) => test.id === parsedID);
    await writeFile(jsonFileName, JSON.stringify(data));
    return test;
  }
  async put(updateTest) {
    let data = JSON.parse(await readFile(jsonFileName));
    const test = data.find((x) => x.id === updateTest.id);
    if (!test) throw "No finish test by this id";
    await writeFile(jsonFileName, JSON.stringify(data));
    return test;
  }
}

module.exports = new TestsRepository();
