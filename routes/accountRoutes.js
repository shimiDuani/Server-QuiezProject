const express = require("express");
const router = express.Router();
const controller = require("../controller/account");
const asyncHandler = require("../helpers/asyncHandler");

// Get questions from json
router.get(
  "/getAccounts",
  asyncHandler(async (req, res) => {
    const data = await controller.getAllAccounts();

    res.send(data);
  })
);

// Add question to the list in json
router.post(
  "/addAccount",
  asyncHandler(async (req, res) => {
    console.log(req);
    try {
      const data = await controller.addAccount(req.body);
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  })
);

router.delete(
  "/deleteAccount/:id",
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.deleteAccount(req.params.id);
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
      const data = await controller.getAccount(req.params.id);
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  })
);
router.put(
  "/updateAccount",
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.updateAccount(req.body);
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  })
);
module.exports = router;
