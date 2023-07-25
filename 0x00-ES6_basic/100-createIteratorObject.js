export default function createIteratorObject(report) {
  const allemployees = [];
  const employeeArray = Object.values(report.allEmployees);
  for (const item of employeeArray) {
    allemployees.push(...item);
  }
  return allemployees;
}
