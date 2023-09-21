function calculateNumber(type, a, b) {
  let result = 0;

  switch (type) {
    case "SUM":
      result = Math.round(a) + Math.round(b);
      break;
    case "DIVIDE":
      const roundedB = Math.round(b);
      if (!roundedB) return "Error";
      result = Math.round(a) / roundedB;
      break;
    case "SUBTRACT":
      result = Math.round(a) - Math.round(b);
      break;
  }

  return result;
}

module.exports = calculateNumber;
