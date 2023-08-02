export default function getListStudentIds(arrayObject) {
  if (!Array.isArray(arrayObject)) {
    return [];
  }
  return [...arrayObject].map((obj) => obj.id);
}
