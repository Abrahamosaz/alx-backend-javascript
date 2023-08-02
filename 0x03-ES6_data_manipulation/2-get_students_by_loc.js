export default function getStudentsByLocation(listStudents, city) {
  return listStudents.filter((studentObj) => studentObj.location === city);
}
