import mongoose from "mongoose";

const discountSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    }
})

export default mongoose.model("discount", discountSchema);