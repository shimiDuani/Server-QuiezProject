const express = require("express");
const router = express.Router();
const controller = require("../controller/test");
const asyncHandler = require("../helpers/asyncHandler");

router.get(
  "/getTests",
  asyncHandler(async (req, res) => {
    const data = await controller.getAllTests();
    res.send(data);
  })
);

router.post(
  "/addTest",
  asyncHandler(async (req, res) => {
    console.log(req);
    try {
      const data = await controller.addTest(req.body);
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  })
);
router.delete(
  "/deleteTest/:id",
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.deleteTest(req.params.id);
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
      const data = await controller.getTest(req.params.id);
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  })
);
router.put(
  "/updateTest",
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.updateTest(req.body);
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  })
);
module.exports = router;
