const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');

const app = express();

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080

//log requests
app.use(morgan('tiny'));

//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}));

//set view engine
app.set("view engine", "ejs")
app.set("views",path.resolve(__dirname,"views/ejs"))

//css/style.css
//app.use('/css', express.static(path.resolve(__dirnmae,"public/css")))
//app.use('/img', express.static(path.resolve(__dirnmae,"public/img")))
//app.use('/js', express.static(path.resolve(__dirnmae,"public/js")))

app.get('/', (req,res) =>{
  res.send("Health Deakin First");
})

app.listen(3000,()=> {console.log(`Server is running on http://localhost:$(3000)`)});