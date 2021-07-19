const express = require('express');
const cors = require('cors');
const APIroutes = require('./routes/api.js');
const { sequelize } = require('./models/index.js');

// Settings
const port = 5000;
const app = express();
app.use(cors());
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api', APIroutes);

// Start server
app.listen(port, async () => {
    console.log(`Server started on http://localhost:${port}`);
    // Connect DB
    await sequelize.authenticate();
    console.log('Database Connected.');
});
