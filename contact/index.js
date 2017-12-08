const express = require('express')
const app = express.Router()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

var contactList = [
    {id: 0, name: 'Ned', surname: 'Stark', email: 'ned@winterfell.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Winter is coming.'},
    {id: 1, name: 'Theon', surname: 'Greyjoy', email: 'tgreyjoy@winterfell.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Reluctant to pay iron price.'},
    {id: 2, name: 'Samwell', surname: 'Tarly', email: 'starly@castleblack.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Loyal brother of the watch.'},
    {id: 3, name: 'Jon', surname: 'Snow', email: 'jsnow@castleblack.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Knows nothing.'},
    {id: 4, name: 'Arya', surname: 'Stark', email: 'waterdancer@winterfell.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Has a list of names.'},
    {id: 5, name: 'Jora', surname: 'Mormont', email: 'khaleesifan100@gmail.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Lost in the friend-zone.'},
    {id: 6, name: 'Tyrion', surname: 'Lannister', email: 'tyrion@lannister.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Currently drunk.'},
    {id: 7, name: 'Stannis', surname: 'Baratheon', email: 'onetrueking@dragonstone.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Nobody expects the Stannish inquisition.'},
    {id: 8, name: 'Hodor', surname: '', email: 'hodor@hodor.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Hodor? Hodor... Hodor!'},
    {id: 9, name: 'Margaery', surname: 'Tyrell', email: 'mtyrell@highgarden.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Keeper of kings.'},
    {id: 10, name: 'Brienne', surname: 'of Tarth', email: 'oathkeeper@gmail.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Do not cross her.'},
    {id: 11, name: 'Petyr', surname: 'Baelish', email: 'petyr@baelishindustries.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Do not trust anyone.'}
  ]

app.get('/contacts', (req, res) => {
    res.json(contactList)
})

app.get('/contact/:id', (req, res) => {
    let flag = true
    for (let i = 0; i < contactList.length; i++) {
        if(req.params.id == contactList[i].id){
            flag = false
            res.json(contactList[i])
        }  
    }
    if(flag){
        res.json("Not found id to search")
    }
})

app.get('/contacts/:name', (req, res) => {
    let flag = true
    for (let i = 0; i < contactList.length; i++) {
        if(req.params.name == contactList[i].name){
            flag = false
            res.json(contactList[i])
        } 
    }
    if(flag){
        res.json("Not found name to search")
    }
})

app.post('/contacts',(req,res) => {
    contactList.push(req.body)
    res.json("add success")
})

app.put('/contact/:id',(req,res)=>{
    let flag = true
    for (let i = 0; i < contactList.length; i++) {
        if(req.params.id == contactList[i].id){
            flag = false
            contactList[i] = req.body
            res.json("update success")
        }
    }
    if(flag){
        res.json("Not found id to update")
    }
})

app.delete('/contacts/:id',(req,res)=>{
    let flag = true
    for (let i = 0; i < contactList.length; i++) {
        if(req.params.id == contactList[i].id){
            flag = false
            contactList.splice(i,1)
            res.json("delete success")
        }
    }
    if(flag){
        res.json("Not found id to delete")
    }
})
 
module.exports = app

 

