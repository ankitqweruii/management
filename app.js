const express = require('express');
const cors = require('cors'); // ⬅️ Add this line
const app = express();

require('dotenv').config();
const sequelize = require('./config/db');
const userRoutes = require('./routes/userRoutes');

// Middleware
app.use(cors()); // ⬅️ Enable CORS for all origins
app.use(express.json());
app.use('/api', userRoutes);

const PORT = process.env.PORT || 5000;
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
