const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require('path');
const mongoose = require("mongoose");
const cookieParser= require("cookie-parser");
const {requireAuth, checkUser}= require("./middleware/authMiddleware")
const apiCall=require("./routes/apiCall");
const auth = require("./routes/auth")
const history=require("./routes/history")




app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

app.use('/docs', express.static(path.join(__dirname, 'docs')));

//Routes
app.get("*", checkUser); 
app.use(apiCall)
app.use(auth)
app.use(history)

app.get("/",(req,res)=>{
    res.render("home")
})

mongoose.connect("mongodb://localhost:27017/Carbon", { useNewUrlParser: true }).then(
    console.log("DB Connected")
);


app.listen(3000, () => {
    console.log("server is running fine");
})
