const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const port = process.env.PORT || 3000

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())
app.use(cors())

app.get('/', function (req, res, next) {
    res.json({"message": "Welcome to node/MongoDB js CRUD API :)"});
});

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
require('dotenv').config()

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

require('./app/routes/blog.routes.js')(app);

app.listen(port, () => {
    console.log("Server is listening on port " +port);
});