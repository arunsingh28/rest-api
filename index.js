const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const expressLayouts = require('express-ejs-layouts')
const PORT = process.env.PORT || 5000

// init express
const app = express()

// mongodb connection
const URI = "mongodb+srv://arun:1234@cluster0.t3qon.mongodb.net/Akash?retryWrites=true&w=majority"
mongoose.connect(URI,{useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex : true})
.then(()=>{console.log('Database is Connected')})
.catch(err => console.log(err))



// setup engine
app.set('views', path.join(__dirname, 'Views'));
app.use(expressLayouts);
app.set("view engine", "ejs");
app.use(express.static("public"));

// body parser
app.use(express.urlencoded({ extended:true }));



// routes
app.use('/',require('./control/routing'))


// port listing
app.listen(PORT,()=>{
    console.log(`Server runing on PORT${PORT}`)
})


