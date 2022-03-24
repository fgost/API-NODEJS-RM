const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const routes = require('./routes');



// Initialize the express application
const app = express();

// Engines
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Apply middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

// Setup static asset serving
app.use(express.static('public'));

// Apply routes
routes(app);

// Start listening for incoming requests
app.listen(5000, () => {
  console.log('API listening on port 5000');
});
