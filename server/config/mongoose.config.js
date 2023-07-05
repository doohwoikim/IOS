const mongoose = require('mongoose');

const dbName = process.env.DB;
const username = process.env.USERNAME;
const pw = process.env.PASSWORD;
const uri = `mongodb+srv://${username}:${pw}@cluster0.uoi0qkf.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Success! DataBase"))
    .catch(err => console.log("***ERROR***database", err));