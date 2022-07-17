const express = require('express');  
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
require('./config/passport')(passport);


// DB config
const db = require('./config/keys').mongoURI;

// 引入model
const users = require('./routers/apis/users');
const profiles = require('./routers/apis/profiles.js');

// 使用中间件
app.use(bodyParser.urlencoded({extended:false})); // body—parser
app.use(bodyParser.json()); // body—parser
app.use(passport.initialize()); // passport
 

// 连接 MongoDB
mongoose.connect(db) 
        .then(() => console.log("MongoDB Connected")) 
        .catch(err => console.log(err));



        
// app.get('/', (req, res) => {
//     res.send('Hello world');
// })





// 使用路由(端口号上面)
app.use("/api/users", users);
app.use("/api/profiles", profiles);
const port = process.env.PORT || 5000;

app.listen(port, (req, res) => {
    console.log(`Server is running on port: ${port}`);
})


// p10