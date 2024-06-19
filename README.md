<h1>Keycloack Configuration</h2>

Download and install Keycloak server locally from official site,

https://www.keycloak.org/downloads,

I have downloaded and extract .zip file for my windows machine.

Terminal into <installation Dir>/bin and then run

kc.bat start-dev --http-port=8180 I wanted to start it in different port,

In the browser localhost:8080 and it will prompt you to create very first admin user.

After you logged in using admin user, lets try to register the client.

1. Log in to the Keycloak admin console.
2. Create a Realm for the project, realm Id is important for the future work
3. Assume the realm has been created, Go to your realm and click on Clients.
4. Click on Create to add a new client.
5. Set the Client ID and select Client Protocol as openid-connect.
6. Set Access Type to confidential. Then save the client.

7. Create a user for later use - in the users section

After saving, go to the Credentials tab. Note the Client Secret.


<h1> Configure and Run the Application </h1>

Replace these three parameter in files server.js, access-configure.js, keycloack.json into yours,

'yor-real-id';
'your-client-id'
'your-client-secret'

Run npm start to start the application

There are two endpoints you can try,

http://localhost:3000/ - Default / public endpoint

http://localhost:3000/protected - protected end point 


protected endpoint - Try first it browser, you will prompt to the keycloak login page,
enter the credentials for the user which you have created above.

Try it in the postman, before that you will have to get the token to send the request.

Do npm start and once the server is started you will see the access token in the console,
Copy the access token and pass it with the postman request as a header, you will have to use bearer type,

ex, bearer accesstoken

send the request and it will get authenticated.