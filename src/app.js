const cors = require("cors");
const helmet = require("helmet");
const router = require("./routes");
const express =  require("express");
const bodyParser = require("body-parser");
const { engine } = require('express-handlebars');

//initialize app
const app = express();

//template engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', 'src/views');

//middleware
app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))


//routes
app.use(router)

//export app
module.exports = app;