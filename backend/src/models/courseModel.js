import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    img: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    title:{
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 0,
        min: 0
    },
    review: {
        type: Number,
        default: 0,
        min: 0
    },
    studentCount: {
        type: Number,
        default: 0,
        min: 0
    },
    courseTime: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true,
        enum: ['Beginner', 'Intermediate', 'Advanced']
    },
    description:{
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    chapter: {
        type: Number,
        required: true,
        default: 0,
        min: 0
    },
    video: {
        type: [String]
    },
    skills:{
        type: [String],
        required: true
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Instructor',
        required: true
    },
})

export default mongoose.model("course", courseSchema);