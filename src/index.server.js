const express = require('express');
const app = express();
const env = require('dotenv');
const mongoose = require('mongoose');
const cors= require('cors')
const bodyParser = require('body-parser');

//route
const bookstoreRoutes= require('./routes/bookstore')

//environment variables
env.config();

//mongodb 
    mongoose.connect(
       `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.rutoy.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`).then(() => {
    console.log('Database Connected');
}).catch((error)=>{
    console.log(error)
})

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json());
app.use('/api', bookstoreRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Your server is running on port ${process.env.PORT}`)
})