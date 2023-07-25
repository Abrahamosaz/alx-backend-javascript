export default function appendToEachArrayValue(array, appendString) {
  const newArray = new Array();
  for (const item of array) {
    newArray.push(appendString + item);
  }

  return newArray;
}
