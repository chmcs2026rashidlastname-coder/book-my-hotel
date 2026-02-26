import Hotel from "../models/Hotel.js";

/* CREATE HOTEL */
export const createHotel = async (req, res) => {
  try {
    const hotel = await Hotel.create(req.body);
    res.status(201).json(hotel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* GET ALL HOTELS */
export const getHotels = async (req, res) => {
  try {
    const { search, location, category } = req.query;

    let query = {};

    if (search) {
      query.title = { $regex: search, $options: "i" };
    }

    if (location) {
      query.location = { $regex: location, $options: "i" };
    }

    if (category) {
      query.category = category;
    }

    const hotels = await Hotel.find(query);

    res.json(hotels);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


/* GET SINGLE HOTEL */
export const getHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) return res.status(404).json({ message: "Hotel not found" });
    res.json(hotel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* UPDATE HOTEL */
export const updateHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!hotel) return res.status(404).json({ message: "Hotel not found" });
    res.json(hotel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* DELETE HOTEL */
export const deleteHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndDelete(req.params.id);
    if (!hotel) return res.status(404).json({ message: "Hotel not found" });
    res.json({ message: "Hotel deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
