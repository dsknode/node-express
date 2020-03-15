const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const campsiteRouter = require('./routes/campsiteRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());


//all, get, post, put, delete for campsites
app.use('/campsites', campsiteRouter);


//all, get, post, put, delete for campsites with ID
// app.all('/campsites/:campsiteId', (req, res, next) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain'); // why plain text?
//     next();
// });
// app.get('/campsites/:campsiteId', (req, res) => {
//     res.end(`will send details of the campsite: ${req.params.campsiteId} to you`);
// });
// app.post('/campsites/:campsiteId', (req, res) => {
//     res.statusCode = 403;
//     res.end('POST operation not supported on /campsites');
// });
// app.put('/campsites/:campsiteId', (req, res) => {
//     res.write(`updating the campsite: ${req.params.campsiteId}\n`);
//     res.end(`Will update the campsite:${req.body.name} with the description:${req.body.description}`);
// });
// app.delete('/campsites/:campsiteId', (req, res) => {
//     res.end(`deleting campsite: ${req.params.campsiteId}`);
// });



app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

function newFunction(next) {
    next();
}
