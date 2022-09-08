const db = require("../repository/questionsRepository.js");

class QuestionsController {
  // Get Questions
  getAllQuestions() {
    return db.getAllQuestions();
  }

  // Add question to the list
  addQuestion(question) {
    if (!question.text) throw "question has no text";
    return db.addQuestion(question);
  }

  deleteQuestion(id) {
    return db.deleteQuestion(id);
  }

  getQuestion(id) {
    return db.getQuestionById(id);
  }

  updateQuestion(question) {
    return db.put(question);
  }
}

module.exports = new QuestionsController();
