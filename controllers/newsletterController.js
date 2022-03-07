const newsletterModel = require('../models/newsletterModel');

const secondPostRequest = (req, res) => {
    const userEmail = new newsletterModel({
        email: req.body.email
    })
    userEmail
    .save()
    .then(response => res.json(response))
    .catch(err => console.log(err))
}
module.exports = secondPostRequest;


