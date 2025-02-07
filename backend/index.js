const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')




const app = express();
app.use(cors({
    origin: process.env.FROENTEND_URL,
    methods: ["POST","GET"],
    credentials: true
}));


app.use(express.json())
app.use(cookieParser())
app.use("/api", router)
// 


const PORT = 5000 || process.env.PORT
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log('connected to db')
        console.log('server is running successfully');
    })
})





