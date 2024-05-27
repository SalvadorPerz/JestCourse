const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect("mongodb+srv://alemarpasapp:eWyxFD0UW89jXLEG@cluster0.wmkmmmv.mongodb.net/todo-tdd");
    } catch (error) {
       console.error("Error connecting to mongodb"); 
       console.error(err);
    }
}

module.exports = { connect };