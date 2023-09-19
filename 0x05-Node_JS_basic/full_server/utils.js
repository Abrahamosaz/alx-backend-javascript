const { readFile } = require("fs");

module.exports = function readDatabase(fileName) {
  return new Promise((resolve, reject) => {
    const students = {};
    readFile(fileName, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lineData = data.split("\n");
        const noHeader = lineData.splice(1);

        for (const line of noHeader) {
          const str_line = line.toString().split(",");
          const last_idx = str_line.length - 1;
          if (Object.hasOwn(students, str_line[last_idx])) {
            students[str_line[last_idx]].push(str_line[0]);
          } else {
            students[str_line[last_idx]] = [str_line[0]];
          }
        }
        resolve(students);
      }
    });
  });
};
