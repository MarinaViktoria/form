const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}))

mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://marynaseidel:tev7SaZXdqwsjQwK@cluster0.hnksrrp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const messageSchema = {
    name: String,
    lastname: String,
    email: String,
    address: String,
    city: String,
    country: String,
    zip: Number,
    message: String 
}
const Message = mongoose.model("MyNewMessages", messageSchema);


app.get('/', (req, res) => {
    app.use(express.static("."));
    res.sendFile(__dirname + '/index.html')
})
app.post('/', (req, res) => {
    let newMessage = new Message({
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
    res.sendFile(__dirname + '/answer.html')
})
app.listen(7000, () => {
    console.log("Server is listening on PORT 7000")
})