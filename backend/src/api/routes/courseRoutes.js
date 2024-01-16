import express from 'express'
const router = express.Router();
import { createCourse } from '../controller/course/createCourse.js'
import { isAuth } from '../../../middleware/AuthMiddleware.js';

router.get('/', (req, res) => {
    res.json({
        result: 'Working Fine'
    })
})

router.post('/createCourse',isAuth, createCourse);

export default router;