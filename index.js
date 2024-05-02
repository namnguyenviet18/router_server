
const express = require('express');
const app = express();
require('dotenv').config();

const PostRouter = require('./route/post_route');
const LoginRouter = require('./route/login');
const dbConnect = require('./db_connect');

dbConnect();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/post', PostRouter);
app.use('/api/auth', LoginRouter);
app.listen(process.env.PORT || 8080, process.env.HOST || 'localhost', () => console.log(`Server are runing on port: ${8080}`));