const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require('path');
const apiCall=require("./routes/apiCall");
const mongoose = require("mongoose");



app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"));
app.use(express.json());
app.use('/docs', express.static(path.join(__dirname, 'docs')));

//Routes
app.use(apiCall)

// mongoose.connect("mongodb://localhost:27017/", { useNewUrlParser: true }).then(
//     console.log("DB Connected")
// );


app.listen(3000, () => {
    console.log("server is running fine");
})
