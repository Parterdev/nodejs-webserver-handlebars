const http = require('http');

// Creating local server to receive and return data from client
http.createServer((req, res) => {
  // Print receive data
  console.log(req);

  // Stablish header content type
  res.writeHead(200, {'Content-Type': 'application/csv'});

  // Structuring response 
  res.write('Hello World');

  // Ending response
  res.end();
})
.listen(8000);

console.log("Listening server from port: ", 8000);