import courseModel from "../../../models/courseModel.js";
import jwt from "jsonwebtoken";
import userModel from "../../../models/userModel.js";

export const createCourse = async (req, res) => {
    try {
        const { img, category, price, title, courseTime, level, description, language, chapter, video, skills } = req.body;
        if (!img || !category || !price || !title || !courseTime || !level || !description || !language || !chapter || !video || !skills) {
            res.status(400).json({
                success: false,
                message: 'Required All fields...'
            })
        } else {
            const { id } = jwt.verify(req.cookies.token, process.env.SECRETKEY);
            const instructor = await userModel.findById(id);
            if (!instructor) {
                res.status(403).json({
                    success: false,
                    message: 'Instructor Not found'
                })
            } else {

                const course = await courseModel.create({
                    img, category, price, title, courseTime, level, description, language, chapter, video, skills, instructor: instructor._id
                })
                res.status(201).json({
                    success: true,
                    course,
                    message: 'Course Created...'
                })

            }
        }
    } catch (error) {
        console.log(error);
        res.json({ error })
    }
}