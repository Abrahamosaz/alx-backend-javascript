const readDatabase = require("../utils");

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2].toString())
      .then((students) => {
        const output = ["This is the list of our students"];
        const sortedKeys = Object.keys(students).sort();
        for (const field of sortedKeys) {
          output.push(
            `Number of students in ${field}: ${
              students[field].length
            }. List: ${students[field].join(", ")}`
          );
        }
        response.status(200).send(output.join("\n"));
      })
      .catch((err) => {
        response.status(500).send("Cannot load the database");
      });
  }

  static getAllStudentsByMajor(request, response) {
    const major = request.params.major;
    readDatabase(process.argv[2].toString())
      .then((students) => {
        if (!(major in students)) {
          response.status(500).send("Major parameter must be CS or SWE");
        } else {
          response.status(200).send(`List: ${students[major].join(", ")}`);
        }
      })
      .catch((err) => {
        console.log("err", err.message);
        response.status(500).send("Cannot load the database");
      });
  }
}

module.exports = StudentsController;
