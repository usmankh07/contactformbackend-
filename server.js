const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const cors = require('cors')
const router = require('./routes/route')
const newsletter = require('./routes/newsletterRoute')

const databaseLink = process.env.DATABASE_LINK
mongoose.connect(databaseLink, () => {
    console.log(`Database connected successfully`);
})

app.use(cors())
app.use(express.json())
app.use('/contact', router)
app.use('/newsletter', newsletter)
app.listen(port, ()=>{
    console.log(`Server is up and running on port ${port}`)
})