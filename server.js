require('dotenv').config()   

const express = require('express');
const app = express();

const db = require('./config/db')

const userRoutes = require('./routes/user')
const postRoutes = require('./routes/post')
const commentRoutes = require('./routes/comment')


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// User registration and authentication
app.use('/api/users', userRoutes)

// BlogPost schema and CRUD operations
app.use('/api/posts',postRoutes)

// Comment schema and CRUD operations
app.use('/api/comments',commentRoutes)



const PORT = process.env.PORT || 3000;
db()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch(err => {
    console.log(err);
})