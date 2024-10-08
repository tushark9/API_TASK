NagaEd API


Introduction:-

This is a simple RESTful API built using Node.js and Express.js. The API manages a list of courses, allowing for basic CRUD (Create, Read, Update, Delete) operations.


Getting Started:-


Prerequisites:-

Node.js installed on your system
Express.js installed as a dependency


Running the API:-


Navigate to the project folder in your terminal or command prompt.

Run node app.js to start the server.

Open a tool like Postman or cURL to test the API endpoints.


API Endpoints:-

Create a new course

Method: POST

Endpoint: http://localhost:3000/courses

Body: {"title": "Introduction to Node.js", "description": "Learn the basics of Node.js", "duration": 2}


Retrieve all courses:-


Method: GET

Endpoint: http://localhost:3000/courses


Retrieve a course by ID:-

Method: GET

Endpoint: http://localhost:3000/courses/:id


Update a course:-


Method: PUT

Endpoint: http://localhost:3000/courses/:id

Body: {"title": "Introduction to Node.js (Updated)", "description": "Learn the basics of Node.js", "duration": 2}


Delete a course:-

Method: DELETE

Endpoint: http://localhost:3000/courses/:id

