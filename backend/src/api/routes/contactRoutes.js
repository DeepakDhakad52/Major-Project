const routes = require('express').Router();
const contactMessages = require('../controller/contact/contactMessages');

routes.route('/').get((req, res)=>{
    res.send('Working');
});

routes.route('/').post(contactMessages);

module.exports = routes;