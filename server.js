const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const godownRoutes = require('./routes/godownRoutes');

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

const mongoURI = process.env.MONGO_URI; 


app.use('/api/godowns', godownRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
