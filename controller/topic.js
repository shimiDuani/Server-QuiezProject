const db = require("../repository/topicsRepository.js");

class TopicsController {
  // Get Questions
  getAllTopics() {
    return db.getAllTopics();
  }

  // Add question to the list
  addTopic(topic) {
    if (!topic.name) throw "No have this topic";
    return db.addTopic(topic);
  }

  deleteTopic(id) {
    return db.deleteTopic(id);
  }

  getTopicById(id) {
    return db.getTopicById(id);
  }

  updateTopic(topic) {
    return db.put(topic);
  }
}

module.exports = new TopicsController();
