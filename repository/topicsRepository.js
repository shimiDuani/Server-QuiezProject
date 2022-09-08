const fs = require("fs");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);
const jsonFileName = "./data/topic.json";

class QuestionsRepository {
  async getAllTopics() {
    const data = JSON.parse(await readFile(jsonFileName));
    if (!data) throw "No have questions";
    return data;
  }

  async addTopic(topic) {
    let data = JSON.parse(await readFile(jsonFileName));
    const biggestId = Math.max.apply(
      Math,
      data.map((topic) => topic.id)
    );
    topic.id = biggestId + 1;
    data.push(topic);
    await writeFile(jsonFileName, JSON.stringify(data));
    return topic;
  }

  async deleteTopic(id) {
    let data = JSON.parse(await readFile(jsonFileName));
    const parsedID = parseInt(id);
    let allTopicss = data.filter((topic) => topic.id !== parsedID);
    await writeFile(jsonFileName, JSON.stringify(allTopicss));
    return id;
  }

  async getTopicById(id) {
    let data = JSON.parse(await readFile(jsonFileName));
    const parsedId = parseInt(id);
    let topic = data.find((topic) => topic.id === parsedId);
    if (!topic) throw "No topic with that id.";
    await writeFile(jsonFileName, JSON.stringify(data));
    return topic;
  }

  async put(updateTopic) {
    let data = JSON.parse(await readFile(jsonFileName));
    const topic = data.find((x) => x.id === updateTopic.id);
    if (!topic) throw "No topic by this id";
    topic.name = updateTopic.name ?? topic.name;
    topic.testId = updateTopic.testId ?? topic.testId;
    topic.questionId = updateTopic.questionId ?? topic.questionId;
    await writeFile(jsonFileName, JSON.stringify(data));
    return topic;
  }
}

module.exports = new QuestionsRepository();
