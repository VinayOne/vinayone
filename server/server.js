let express = require('express'),
   path = require('path'),
   bodyParser = require('body-parser');
  
// Setting up port with express js
const apiRoute = require('../server/routes/api.route');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: false
}));

app.use(express.static(path.join(__dirname, '../dist/vinayone/browser')));
app.use('/', express.static(path.join(__dirname, '../dist/vinayone/browser')));
app.use('/api', apiRoute);

// Create port
const port = process.env.PORT || 4002;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// Find 404 and hand over to error handler
// app.use((req, res, next) => {
//    //return res.status(404).send({ message: 'Route'+req.url+' Not found.' });
//    res.redirect('back');
// });

// error handler
// app.use(function (err, req, res, next) {
//   console.error(err.message); // Log error message in our server's console
//   if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
//   res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
// });