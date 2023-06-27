const mongoose = require('mongoose');
const app = require('./app');
const PORT = 8082;

const DB_URL = 'mongodb+srv://shreya:<password>@cluster0.4v6y3l9.mongodb.net/?retryWrites=true&w=majority';
const DB_PASSWORD = 'eT7ytSGiANaQI04q';

const DB = DB_URL.replace('<password>', DB_PASSWORD);
mongoose.connect(DB).then(()=>{
    console.log("DB connected successfully")
}).catch((error)=>{
    console.log("DB error", error);
})
app.listen(PORT, () => {
    console.log(`Listening on the port ${PORT}`)
});
