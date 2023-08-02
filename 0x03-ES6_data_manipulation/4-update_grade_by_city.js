export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }
  // Filter students by location
  // Change/add grade for students in newGrades
  // If a filtered student is not in new Grades => grade = N/A

  const cityStudents = students
    .filter((student) => student.location === city)
    .map((student) => {
      const item2 = newGrades.find(
        (student2) => student.id === student2.studentId
      );

      return { ...student, grade: item2 ? item2.grade : "N/A" };
    });
  return cityStudents;
}
