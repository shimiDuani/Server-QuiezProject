const express = require("express");
const router = express.Router();
const controller = require("../controller/student");
const asyncHandler = require("../helpers/asyncHandler");

// Get questions from json
router.get(
  "/getStudents",
  asyncHandler(async (req, res) => {
    const data = await controller.getAllStudents();

    res.send(data);
  })
);

// Add question to the list in json
router.post(
  "/addStudent",
  asyncHandler(async (req, res) => {
    console.log(req);
    try {
      const data = await controller.addStudent(req.body);
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  })
);

router.delete(
  "/deleteStudent/:id",
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.deleteStudent(req.params.id);
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
      const data = await controller.getStudent(req.params.id);
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  })
);
router.put(
  "/updateStudent",
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.updateStudent(req.body);
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  })
);
module.exports = router;
