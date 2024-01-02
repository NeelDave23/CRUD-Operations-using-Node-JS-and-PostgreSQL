const { Router } = require("express");

const router = Router();
const controllers = require("./controller");
router.get("/", controllers.getStudents);
router.post("/", controllers.addStudents);
router.get("/:id", controllers.getStudentByID);
router.put("/:id", controllers.updateStudent);
router.delete("/:id", controllers.removeStudentByID);
module.exports = router;
