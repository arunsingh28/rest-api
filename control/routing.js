const express = require('express')

const app = express.Router()

// models
const User = require('../model/user')




// Home Route
app.get('/',(req,res)=>{
    res.render('home')
})



// fetch all data
// GET route 
app.get('/all',(req,res)=>{
    User.find({},(err,docs)=>{
        if(!docs){
            res.redirect('/')
        }else{
            res.render('delete',{docs})
        }
    })
})


// for adding user
// POST method
app.post('/add',(req,res)=>{
    const {name,roll,dob,clas,group,mark} = req.body
    const newUser = User({name,roll,dob,clas,group,mark})
    newUser.save()
    .then(()=>{
        res.redirect('/all')
    })
    .catch(err => console.log(err))
})


// for delete user
// GET method
app.get('/delete/:id',(req,res)=>{
    const id = req.params.id;
    User.findOneAndDelete({ _id: id},(err,done)=>{
        if(err) throw err;
        if(done){
            res.redirect('/all')
        }
    })
})

// for editing user
// POST method
app.post('/edit',(req,res)=>{
    const {name,roll,clas,mark,group,id} = req.body;
    User.updateOne({_id:id},{
        $set : { name, roll, clas, mark, group }
    }).then(res.redirect('/all'))
    .catch(err => console.log(err))
})







module.exports = app;