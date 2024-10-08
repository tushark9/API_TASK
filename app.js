const express = require('express');
const app = express();
const courses = require('./courses');

app.use(express.json());

app.post('/courses', (req, res) => {
  const course = req.body;
  const newCourse = courses.createCourse(course);
  res.status(201).json(newCourse);
});

app.get('/courses', (req, res) => {
  const allCourses = courses.getAllCourses();
  res.json(allCourses);
});

app.get('/courses/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const course = courses.getCourseById(id);
  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ error: 'Course not found' });
  }
});

app.put('/courses/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const course = req.body;
  const updatedCourse = courses.updateCourse(id, course);
  if (updatedCourse) {
    res.json(updatedCourse);
  } else {
    res.status(404).json({ error: 'Course not found' });
  }
});

app.delete('/courses/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const deleted = courses.deleteCourse(id);
  if (deleted) {
    res.status(204).json({ message: 'Course deleted' });
  } else {
    res.status(404).json({ error: 'Course not found' });
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});