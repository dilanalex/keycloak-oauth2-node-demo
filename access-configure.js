const axios = require('axios');
const qs = require('qs');

// Keycloak configuration
const realm = '<yor-real-id>';
const clientId = '<your-client-id>';
const clientSecret = '<your-client-secret>';
const keycloakBaseUrl = 'http://localhost:8180';  // Adjust if necessary

// Function to get access token
async function getAccessToken() {
  const tokenUrl = `${keycloakBaseUrl}/realms/${realm}/protocol/openid-connect/token`;
  const data = {
    grant_type: 'client_credentials',
    client_id: clientId,
    client_secret: clientSecret
  };

  try {
    const response = await axios.post(tokenUrl, qs.stringify(data), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    return response.data.access_token;
  } catch (error) {
    console.error('Error obtaining access token:', error.response.data);
  }
}

// Function to use the access token
async function useAccessToken() {
    try {
      const accessToken = await getAccessToken();
      console.log('Access Token:', accessToken);
  
      const apiUrl = 'http://localhost:3000/protected';  // Your protected endpoint
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      console.log('Protected Resource Response:', response.data);
    } catch (error) {
      console.error('Error accessing protected resource:', error.response.data);
    }
  }
  
  module.exports = useAccessToken;