const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5501;

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} - ${req.url}`);
  next();
});

// Serve static files from the 'kingshome' directory
const staticPath = path.join(__dirname, 'kingshome');
console.log(`Serving static files from: ${staticPath}`);
app.use(express.static(staticPath));

// Handle requests to the root URL
app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'kingshome', 'index.html');
  console.log(`Serving index file: ${indexPath}`);
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error(`Error sending index file: ${err}`);
      res.status(err.status).end();
    }
  });
});

// Handle 404 errors
app.use((req, res) => {
  console.log(`404 Not Found - ${req.method} - ${req.url}`);
  res.status(404).send('404: File Not Found');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
