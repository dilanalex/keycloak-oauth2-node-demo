const express = require('express');
const session = require('express-session');
const Keycloak = require('keycloak-connect');

function startServer() {
    const app = express();
    const memoryStore = new session.MemoryStore();
  
    app.use(session({
      secret: 'your-secret-key',
      resave: false,
      saveUninitialized: true,
      store: memoryStore
    }));
  
    const keycloak = new Keycloak({ store: memoryStore }, {
      "realm": "<yor-real-id>",
      "auth-server-url": "http://localhost:8180",  // Adjust if necessary
      "ssl-required": "external",
      "resource": "<your-client-id>",
      "credentials": {
        "secret": "<your-client-secret>"
      },
      "confidential-port": 0
    });
  
    app.use(keycloak.middleware());
  
    app.get('/', (req, res) => {
      res.send('Welcome to the public endpoint!');
    });
  
    app.get('/protected', keycloak.protect(), (req, res) => {
      res.send('You have accessed a protected endpoint!');
    });
  
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }
  
  module.exports = startServer;
