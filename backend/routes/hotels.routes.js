const express = require("express");
const {
  createHotel,
  updateHotel,
  getHotel,
  deleteHotel,
  getAllHotel,
} = require("../controller/hotels.controller");
const { verifyAdmin } = require("../middleware/checkAuthenticate.middleware");
const hotelsRouter = express.Router();

// CREATE
hotelsRouter.post("/", verifyAdmin, createHotel);

// UPDATE
hotelsRouter.put("/:id", verifyAdmin, updateHotel);

// DELETE
hotelsRouter.delete("/:id", verifyAdmin, deleteHotel);

// GET
hotelsRouter.get("/:id", getHotel);

// GETALL
hotelsRouter.get("/", getAllHotel);

module.exports = { hotelsRouter };
