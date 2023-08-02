export default function getStudentIdsSum(listStudents) {
  return listStudents.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id,
    0
  );
}
