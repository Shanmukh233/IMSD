// Import http module
const http = require('http');

// Create a server that sends JSON data
const server = http.createServer((req, res) => {
  // Create sample data
  const userData = {
    name: "Shanmukh",
    age: 21,
    course: "Full Stack Development",
    serverTime: new Date().toISOString()
  };

  // Set response headers for JSON
  res.writeHead(200, { 'Content-Type': 'application/json' });

  // Send data as JSON string
  res.end(JSON.stringify(userData));
});

// Start the server
server.listen(4000, () => {
  console.log('HTTP Data Server running at http://localhost:4000/');
});
