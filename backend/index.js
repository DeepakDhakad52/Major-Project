import express from 'express'
const app = express();
import cors from "cors";
import bodyParser from 'body-parser';
import dbConnect from "./database/dbConnect.js";
import dotenv from "dotenv";

//routes
import userRoutes from "./src/api/routes/userRoutes.js";
import discountRoutes from "./src/api/routes/discountRoutes.js";
import contactRoutes from "./src/api/routes/contactRoutes.js";
import cookieParser from "cookie-parser";


dotenv.config();
dbConnect();


app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())

app.get("/", (req, res) => {
  res.send("working fine");
});

app.use("/v1/auth" , userRoutes);
app.use("/v1/discount", discountRoutes);
app.use("/v1/contact", contactRoutes)


app.listen(process.env.PORT, () => {
  console.log("listening on port : ", process.env.PORT);
});
