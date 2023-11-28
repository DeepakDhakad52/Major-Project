const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const dbConnect = require("./database/dbConnect.js");
const dotenv = require("dotenv");

//routes
const userRoutes = require("./src/api/routes/userRoutes.js");
const discountRoutes = require("./src/api/routes/discountRoutes.js");


dotenv.config();
dbConnect();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("working fine");
});

app.use("/v1/auth" , userRoutes);
app.use("/v1/discount", discountRoutes);


app.listen(process.env.PORT, () => {
  console.log("listening on port : ", process.env.PORT);
});
