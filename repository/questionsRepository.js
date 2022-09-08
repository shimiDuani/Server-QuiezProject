const fs = require("fs");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);
const jsonFileName = "./data/question.json";

class QuestionsRepository {
  async getAllQuestions() {
    const data = JSON.parse(await readFile(jsonFileName));
    if (!data) throw "No have questions";
    return data;
  }

  async addQuestion(question) {
    let data = JSON.parse(await readFile(jsonFileName));
    const biggestId = Math.max.apply(
      Math,
      data.map((question) => question.id)
    );
    question.id = biggestId + 1;
    question.lastUpdate = Date.now();
    data.push(question);
    await writeFile(jsonFileName, JSON.stringify(data));
    return question;
  }

  async deleteQuestion(id) {
    let data = JSON.parse(await readFile(jsonFileName));
    const parsedID = parseInt(id);
    let allQuestions = data.filter((question) => question.id !== parsedID);
    await writeFile(jsonFileName, JSON.stringify(allQuestions));
    return id;
  }

  async getQuestionById(id) {
    let data = JSON.parse(await readFile(jsonFileName));
    const parsedID = parseInt(id);
    let question = data.find((question) => question.id === parsedID);
    if (!question) throw "No question with that id.";
    await writeFile(jsonFileName, JSON.stringify(data));
    return question;
  }

  async put(updateQuestion) {
    let data = JSON.parse(await readFile(jsonFileName));
    const question = data.find((x) => x.id === updateQuestion.id);
    if (!question) throw "No question by this id";
    question.text = updateQuestion.text ?? question.text;
    question.tag = updateQuestion.tag ?? question.tag;
    question.type = updateQuestion.type ?? question.type;
    question.layout = updateQuestion.layout ?? question.layout;
    question.textBelowQuestion =
      updateQuestion.textBelowQuestion ?? question.textBelowQuestion;
    question.language = updateQuestion.language ?? question.language;
    question.isActivate = updateQuestion.isActivate ?? question.isActivate;
    question.lastUpdate = Date.now();
    question.Answers = updateQuestion.Answers ?? question.Answers;
    await writeFile(jsonFileName, JSON.stringify(data));
    return question;
  }
}

module.exports = new QuestionsRepository();
