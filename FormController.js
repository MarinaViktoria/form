const MyNewMessages = require('./FormModel');

module.exports.getMessage = (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
}
module.exports.saveMessage = (req, res) => {
    let newMessage = new MyNewMessages({
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        address: req.body.address,
        city: req.body.city,
        country: req.body.country,
        zip: req.body.zip,
        message: req.body.message
    })
    newMessage.save();
    res.sendFile(__dirname + '/public/answer.html')
}