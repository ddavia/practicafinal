const express = require('express');
const mongoose = require('mongoose');
const app = express();
const userSchema = require("./models/user");
app.use(express.json());
app.listen(3000);
console.log('server on port', 3000);



mongoose.connect('mongodb+srv://dirk:dirk@cluster0.53zgh.mongodb.net/?retryWrites=true&w=majority')
    .then(db => console.log('db conectat a', db.connection.host))
    .catch(err => console.error(err));

app.get('/',(req,res) => {
    res.send('Aquesta es la API del Dirk')
});

app.post("/users", (req,res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }) )
});

app.get("/users", (req,res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }) )
});

app.get("/users/:id", (req,res) => {
    const { id } = req.params;
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }) )
});

app.put("/users/:id", (req,res) => {
    const { id } = req.params;
    const { name, age ,email, contraseña } = req.body;
    userSchema
        .updateOne({_id: id},{$set: {name, age ,email, contraseña}})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }) )
});

app.delete("/users/:id", (req,res) => {
    const { id } = req.params;
    userSchema
        .remove({_id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }) )
});

