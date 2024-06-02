const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models');
const routes = require('./routes');

const app = express(); // initializing the express app
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use(routes);

app.get('/', (req, res) => {
    res.send('Welcome to STUXNET');
});

app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    await sequelize.authenticate(); // This is the line that connects the application to the database.
    console.log('Database connected!');
});
