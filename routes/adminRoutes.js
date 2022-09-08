const express = require("express");
const router = express.Router();
const controller = require("../controller/admin");
const asyncHandler = require("../helpers/asyncHandler");

// Get questions from json
router.get(
  "/getAdmins",
  asyncHandler(async (req, res) => {
    const data = await controller.getAllAdmins();

    res.send(data);
  })
);

// Add question to the list in json
router.post(
  "/addAdmin",
  asyncHandler(async (req, res) => {
    console.log(req);
    try {
      const data = await controller.addAdmin(req.body);
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  })
);

router.delete(
  "/deleteAdmin/:id",
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.deleteAdmin(req.params.id);
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
      const data = await controller.getAdmin(req.params.id);
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  })
);
router.put(
  "/updateAdmin",
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.updateAdmin(req.body);
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  })
);
module.exports = router;
