// app.js
const startServer = require('./server');
const useAccessToken = require('./access-configure');

// Start the server
startServer();

// Use access token to access protected endpoint
useAccessToken();