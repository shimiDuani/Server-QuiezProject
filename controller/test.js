const db = require("../repository/testsRepository.js");

class TestsController {
  // Get Questions
  getAllTests() {
    return db.getAllTests();
  }

  // Add question to the list
  addTest(test) {
    if (!test.name) throw "test has no name";
    return db.addTest(test);
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

module.exports = new TestsController();
