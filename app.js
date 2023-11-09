const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
// let ejs = require('ejs');
const mongoose = require('mongoose');
const seedDb = require('./seed.js');
const BlogRoutes = require('./routes/blog.js')
const ReviewRoutes = require('./routes/review.js')
const engine = require('ejs-mate');
const methodOverride = require('method-override')

mongoose.connect('mongodb://127.0.0.1:27017/Blogging-App').then(() => {
    console.log('db connected');
}).catch((err) => {
    console.log("DB Error");
    console.log(err);
})

app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.use(methodOverride('_method')) // for sending patch request 

app.set('views', path.join(__dirname, 'views')); // views folder
app.use(express.static(path.join(__dirname, 'public'))); // public folder
app.use(express.urlencoded({ extended: true }))  // middleware for post request

app.use(BlogRoutes); // so that har incoming request par check kiya jaye
app.use(ReviewRoutes);


app.get('/', (req, res) => {
    res.send('Welcome to our blogging app');
})

app.listen(port, () => {
    console.log('listening at port 8000');
})



// seeding database (running only for fisrt tym)
// seedDb();

