const db = require("../repository/finishTestsRepository.js");

class FinishTestsController {
  // Get Questions
  getAllTests() {
    return db.getAllFinishTests();
  }

  // Add question to the list
  addTest(test) {
    if (!test.name) throw "test has no name";
    return db.addFinishTest(test);
  }

  deleteTest(id) {
    return db.deleteTest(id);
  }

  getTest(id) {
    return db.getTestById(id);
  }

  updateTest(test) {
    return db.put(test);
  }
}

module.exports = new FinishTestsController();
