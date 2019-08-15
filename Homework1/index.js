/**Primary file for the Api
 * 
 */

 //dependencies
 const http = require('http');
 const url = require('url');

  // Configure the server to respond to all requests with a string

const server = http.createServer((req, res) =>{
    // Parse the url
    let parsedUrl = url.parse(req.url, true);

    // Get the path
    let path = parsedUrl.pathname;
    let trimmedPath = path.replace(/^\/+|\/+$/g, '');

    // Get the query string as an object
    let queryStringObject = parsedUrl.query;

     // Get the HTTP method
    let method = req.method.toLowerCase();

    // Send the response
    res.end('Hello World!\n');

     // Log the request/response
     // queryString can not use as string literal
    //console.log(`Request received on path: ${trimmedPath} with method: ${method} and query is:  ${queryStringObject}`);
    console.log('Request received on path: '+trimmedPath+' with method: '+method+' and this query string: ',queryStringObject);

});
  
  // Start the server
  server.listen(3000,() => {
    console.log('The server is up and running now on port 3000');
  });