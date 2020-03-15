const express = require('express');
const bodyParser = require('body-parser');
const campsiteRouter = express.Router();

campsiteRouter.use(bodyParser.json());

//these below are all chained together to the route '/'
campsiteRouter.route('/')
.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain'); // why plain text?
  next();
})
.get((req, res) => {
  res.end('will send campsites to you');
})
.post((req, res) => {
  res.end(`will add campsites:${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /campsites');
})
.delete((req, res) => {
  res.end('deleting all campsites');
});

module.exports = campsiteRouter;