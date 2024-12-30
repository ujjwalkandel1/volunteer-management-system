const express = require("express");
const { connectDatabase } = require("./database");
const app = express();
require("dotenv").config();
const cors = require("cors");

//json parse
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure CORS to allow requests from specific origins
const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
};
// Apply CORS middleware
app.use(cors(corsOptions));

const PORT = process.env.PORT;

//For connecting data we are invoking a function
connectDatabase(process.env.MONGO_URL);

//Routes/API
const eventRoutes = require("./Router/eventRouter");
const userRoutes = require("./Router/publicUser/userRouter");
const orgRoutes = require("./Router/org/orgRouter");

app.use("/api", eventRoutes);
app.use("/api", userRoutes);
app.use("/api", orgRoutes);

// Define a route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Sewa homepage</h1>");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
