import express from 'express'
const router = express.Router()

import discountRegister from "../controller/discount/discountRegister.js"

router.route("/").get((req,res) => {
    res.send("discount routes working");
});

router.route("/email").post(discountRegister);

export default router;