import express from "express";
import {
  createHotel,
  getHotels,
  getHotel,
  updateHotel,
  deleteHotel
} from "../controllers/hotelController.js";

const router = express.Router();

router.route("/")
  .get(getHotels)
  .post(createHotel);

router.route("/:id")
  .get(getHotel)
  .put(updateHotel)
  .delete(deleteHotel);

export default router;
