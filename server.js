const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Configs
const app = express();
dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Models
require('./models/Issue');

// DB Connection
const mongoConnectOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(process.env.DATABASE, mongoConnectOptions)
  .then(() => console.log('DB connected!'))
  .catch((error) => console.log(error));

mongoose.connection.on('error', (error) => console.log(error));

// Routes
const issueRoute = require('./routes/issueRoute');

app.use('/', issueRoute);

// Start app
app.set('port', process.env.PORT || 3001);
app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}`)
});
