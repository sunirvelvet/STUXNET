const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models');
const authRoutes = require('./routes/auth');
const gameRoutes = require('./routes/games');
// we are importing everything here, we could damage the site by playing
// with playing with some import as well.


const app = express(); // initializign the express app
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/auth', authRoutes); // authRoutes is a router middleware that I am defining myself at the routes folder.
app.use('/games', gameRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to STUXNET');
});


app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    await sequelize.authenticate(); // This is the line that connects the application to the database.
    console.log('Database connected!')
})
