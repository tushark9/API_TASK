const courses = [];

module.exports = {
  getAllCourses: () => courses,
  getCourseById: (id) => courses.find((course) => course.id === id),
  createCourse: (course) => {
    course.id = courses.length + 1;
    courses.push(course);
    return course;
  },
  updateCourse: (id, course) => {
    const index = courses.findIndex((c) => c.id === id);
    if (index >= 0) {
      courses[index] = course;
      return course;
    }
    return null;
  },
  deleteCourse: (id) => {
    const index = courses.findIndex((c) => c.id === id);
    if (index >= 0) {
      courses.splice(index, 1);
      return true;
    }
    return false;
  },
};