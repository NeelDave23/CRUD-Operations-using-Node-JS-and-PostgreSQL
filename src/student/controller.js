const pool = require("../student/db");
const queries = require("./quearies");
const getStudents = (req, res) => {
  pool.query(queries.getStudents, (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
};
const getStudentByID = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getStudentByID, [id], (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};
const addStudents = (req, res) => {
  const { name, email, age, dob } = req.body;
  pool.query(queries.checkEmail, [email], (error, result) => {
    if (result.rows.length) {
      res.send("Email Already Exists:( ");
    }
    pool.query(
      queries.addStudents,
      [name, email, age, dob],
      (error, result) => {
        if (error) throw error;
        res.status(201).send("Student Added Successfully");
      }
    );
  });
};

const removeStudentByID = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getStudentByID, [id], (error, result) => {
    const notfound = !result.rows.length;
    if (notfound) {
      res.send("Student not exists");
    } else {
      pool.query(queries.removeStudentByID, [id], (error, result) => {
        if (error) throw error;
        res.status(200).send("Success");
      });
    }
  });
};
const updateStudent = (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  pool.query(queries.getStudentByID, [id], (error, result) => {
    const notfound = !result.rows.length;
    if (notfound) {
      res.send("Student not exists");
    } else {
      pool.query(queries.updateStudent, [name, id], (error, result) => {
        if (error) {
          throw error;
        } else {
          res.status(200).send("Updated");
        }
      });
    }
  });
};

module.exports = {
  getStudents,
  getStudentByID,
  addStudents,
  removeStudentByID,
  updateStudent,
};
