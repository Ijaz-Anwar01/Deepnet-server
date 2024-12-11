
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const menuRoutes = require('./routes/menu.route');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'https://deepnet-client.onrender.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  credentials: true,
}));

app.use(express.json());


mongoose.connect('mongodb+srv://ijasanwar1:bukSN52k2X1a3ko0@cluster0.qe0m6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',)
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.log('MongoDB connection error:', error));


app.use('/api', menuRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
