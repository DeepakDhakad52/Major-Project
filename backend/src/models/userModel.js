import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname : {
        type : String,
        required: true
    },
    lastname : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type: String,
        required: true,
        unique:true,
        minLength: 3
    },
    agreeToTerms: {
        type: Boolean,
        required: true
    }

})
export default mongoose.model("user", userSchema);