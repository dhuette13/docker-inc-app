# Docker Test

Test app using Docker concepts. Contains following containers:
- React.js single page app
- Python Flask backend app
- Redis key store

Requests to update counter are proxied to Flask app, which performs increment in redis db. Demonstrates containerization of apps and how they can interact.
