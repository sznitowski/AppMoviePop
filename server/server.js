const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');

const { errorHandler, notFound } = require('./middleware/error.middleware');

const app = express();
dotenv.config();

connectDB();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('api is running')
})

app.use(express.urlencoded({extended: false}));

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on PORT ${PORT}`));