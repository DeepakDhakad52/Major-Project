import express from 'express'
const router = express.Router()
import contactMessages from '../controller/contact/contactMessages';

router.route('/').get((req, res)=>{
    res.send('Working');
});

router.route('/').post(contactMessages);

export default router;