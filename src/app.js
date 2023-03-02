const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./utils/database');
const initModels = require('./models/initModels');
const userRoutes = require('./routes/users.routes');

initModels();
const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const port = 8000;

db.authenticate()
  .then(() => {
    console.log('Database connected...');
  })
  .catch((error) => console.log(error));

  db.sync({alter: false})
  .then(() => {
    console.log('Database synced...');
  })
  .catch((error) => console.log(error));

  app.use(userRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

