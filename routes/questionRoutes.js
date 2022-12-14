const express = require("express");
const router = express.Router();
const controller = require("../controller/question");
const asyncHandler = require("../helpers/asyncHandler");

// Get questions from json
router.get(
  "/getQuestions",
  asyncHandler(async (req, res) => {
    const data = await controller.getAllQuestions();

    res.send(data);
  })
);

// Add question to the list in json
router.post(
  "/addQuestion",
  asyncHandler(async (req, res) => {
    console.log(req);
    try {
      const data = await controller.addQuestion(req.body);
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  })
);

router.delete(
  "/deleteQuestion/:id",
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.deleteQuestion(req.params.id);
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  })
);
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.getQuestion(req.params.id);
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  })
);
router.put(
  "/updateQuestion",
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.updateQuestion(req.body);
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  })
);
module.exports = router;
