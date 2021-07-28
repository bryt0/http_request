const mongoose = require('mongoose');

async function dbConfig() {
    try { 
        await mongoose.connect("mongodb+srv://bryt0:brito100@cluster0.hes5a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
            useNewUrlParser: true,
            useUnifiedTopology: true,

    });
        console.log ('database connected')
} catch (error) {
    console.log(error)

    }
}
module.exports = dbConfig;