// create web server and listen to port
// create a route /comment
// when user access this route, it will return a json object
// with the property name and value of the property
// name is "comment" and value is "this is a comment"
// start the server and listen to port 3000
const express = require('express');
const app = express();
const port = 3000;

app.get('/comment', (req, res) => {
  res.json({ comment: 'this is a comment' });
});

app.listen(port, () => {
  console.log('Server is running on port', port);
});