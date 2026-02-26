import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import hotelRoutes from "./routes/hotelRoutes.js";
import dns from "node:dns";

dns.setServers(["1.1.1.1","8.8.4.4"]);


dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/hotels", hotelRoutes);

app.get("/", (req, res) => {
  res.send("Book My Hotel API is running...");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`http://localhost:3000/api/hotels`)
});
