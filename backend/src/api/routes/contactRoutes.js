import express from 'express'
const router = express.Router()
import contactMessages from '../controller/contact/contactMessages.js';

router.route('/').get((req, res)=>{
    res.send('Working');
});

router.route('/').post(contactMessages);

export default router;