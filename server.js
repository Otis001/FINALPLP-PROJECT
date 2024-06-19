const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5501;

// Serve static files from the 'kingshome' directory
app.use(express.static(path.join(__dirname, 'kingshome')));

// Handle requests to the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'kingshome', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
