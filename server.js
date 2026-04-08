const express = require('express'); 
const app = express();

const connectDB = require('./config/db');


app.use(express.json());

connectDB();

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Bookstore API!' });
});

app.use('/api/books', require('./routes/bookRoutes'));

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});