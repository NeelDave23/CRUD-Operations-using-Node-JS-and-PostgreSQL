const getStudents = "SELECT * FROM students";
const getStudentByID = "SELECT * FROM students WHERE id = $1";
const checkEmail = "SELECT s from students s WHERE s.email= $1";
const removeStudentByID = "DELETE FROM students WHERE id = $1";
const addStudents =
  "INSERT INTO students (name,email,age,dob) VALUES ($1,$2,$3,$4)";
const updateStudent = "UPDATE students SET name = $1 WHERE id = $2";

module.exports = {
  getStudents,
  getStudentByID,
  checkEmail,
  addStudents,
  removeStudentByID,
  updateStudent,
};
