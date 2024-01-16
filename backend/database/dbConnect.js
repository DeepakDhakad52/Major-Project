import mongoose from "mongoose";

mongoose.set("strictQuery" , false);
const dbConnect = () => {
    mongoose.connect(process.env.DB_URL , {
        useNewUrlParser : true,
        useUnifiedTopology : true,
    })
    .then(() => {
        console.log("Connected sucessfully");
    })
    .catch((err) => {
        console.log("Not Connected");
    })
}

export default dbConnect;