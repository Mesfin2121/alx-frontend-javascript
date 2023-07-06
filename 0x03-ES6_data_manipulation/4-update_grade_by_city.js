export default function updateStudentGradeByCity(array, city, newGrades) {
  return array
    .filter((std) => std.location === city)
    .map((std) => ({
      ...std,
      grade:
        newGrades
          .filter((g) => g.studentId === std.id)
          .map((g) => g.grade)[0] || 'N/A',
    }));
}

