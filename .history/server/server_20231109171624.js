// Import necessary modules
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Create an Express app
const app = express();

const express = require("express");
const cors = require("cors");

const app = express();

const allowedOrigins = ["http://192.168.x.x:3000"]; // Replace with your mobile device's IP address
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

// Body parser middleware for parsing JSON in requests
app.use(express.json());

// Connect to your MongoDB database (adjust the URL accordingly)
mongoose.connect("mongodb://127.0.0.1:27017/parking", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to MongoDB database");
});

// Define the User model
const User = mongoose.model("User", {
  name: String,
  password: String,
});

// Registration route
app.post("/api/register", async (req, res) => {
  try {
    const { name, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ name });

    if (existingUser) {
      return res.status(400).send("User already exists");
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create and save the new user
    const newUser = new User({
      name,
      password: hashedPassword,
    });
    await newUser.save();

    res.status(200).send("Registration successful");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// Login route
app.post("/api/login", async (req, res) => {
  try {
    const { name, password } = req.body;

    // Find the user by name
    const user = await User.findOne({ name });

    if (!user) {
      return res.status(400).send("User not found");
    }

    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(400).send("Invalid password");
    }

    // Generate a JWT token
    const token = jwt.sign({ name: user.name }, "your-secret-key", {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
