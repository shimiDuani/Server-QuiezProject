const express = require("express");
const router = express.Router();
const controller = require("../controller/topic");
const asyncHandler = require("../helpers/asyncHandler");

// Get questions from json
router.get(
  "/getTopics",
  asyncHandler(async (req, res) => {
    const data = await controller.getAllTopics();

    res.send(data);
  })
);

// Add question to the list in json
router.post(
  "/addTopic",
  asyncHandler(async (req, res) => {
    console.log(req);
    try {
      const data = await controller.addTopic(req.body);
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  })
);

router.delete(
  "/deleteTopic/:id",
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.deleteTopic(req.params.id);
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
      const data = await controller.getTopicById(req.params.id);
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  })
);
router.put(
  "/updateTopic",
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.updateTopic(req.body);
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  })
);
module.exports = router;
