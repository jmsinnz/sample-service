import * as express from 'express';
const app = express();
let count = 0;


app.get('/', (request, response) => {
  count += 1;
  response.send({
    name: 'James',
    date: new Date(),
    count,
  });
});


// Start the web server.
const PORT = 1234;
app.listen(PORT, function () {
  console.log(`Running on port ${PORT}`);
});
