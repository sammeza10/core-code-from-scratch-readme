# Forrest Gump Ping-Pong API 🏓:

Create a simple REST API with which you can play ping-pong.

## API Requeriments:

- Use Express JS to build the API.
- Use any port you want for the API.
- The API has to be able to respond to the "ping" request with the "pong" message.
- Use `/api/buba-gump` as the root route for the API.
- Make sure your API responds to the request using JSON e.g.:
  ```javascript
  {
    "message": "pong"
  }
  ```
- Use Postman to test your API.
- Optional but desirable, make your API capable of responding to any player move:
  - If the user makes the "ping" move, your API should respond with "pong".
  - If the user makes the "pong" move, your API should respond with "ping".
