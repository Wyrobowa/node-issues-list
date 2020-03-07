const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const mongoSanitize = require('express-mongo-sanitize');
const bodyParser = require('body-parser');
const cors = require('cors');

// Configs
const app = express();
app.disable('x-powered-by');
app.use(cors());

dotenv.config();

app.use(mongoSanitize());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Models
require('./models/Issue');

// DB Connection
const mongoConnectOptions = {
  useCreateIndex: true,
  useFindAndModify: false,
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
