const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
//const chatRoutes = require('../routes/chatRoutes');

app.use(cors());
app.use(bodyParser.json());



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));
