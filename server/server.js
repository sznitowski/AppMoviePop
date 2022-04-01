const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
/* const cors = require('cors') */
const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');
const path = require("path");

const { errorHandler, notFound } = require('./middleware/error.middleware');

const app = express();
dotenv.config();

connectDB();
app.use(express.json());
/* app.use(cors()); */
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

/* Deployment */

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client', 'build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    });
} else {
    app.get("/", (req, res) => {
        res.send("Api is running..")
    })
}

/* Deployment */

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on PORT ${PORT}`));