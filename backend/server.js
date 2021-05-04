require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const signin = require("./routes/api/users");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "API running..." });
});

// Bodyparser middleware
// app.use(
//     bodyParser.urlencoded({
//       extended: false
//     })
//   );
// app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

// app.use("/api/account/signin", signin);

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 6500;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;