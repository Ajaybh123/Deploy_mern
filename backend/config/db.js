const mongoose = require('mongoose');

async function connectDB() {
    try {
        mongoose.connect(process.env.MONGODB_URI)
        console.log('mongodb is connected success')

    } catch (err) {
        console.log(err)

    }
}
module.exports = connectDB
