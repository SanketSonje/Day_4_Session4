function start() {
  let num1 = 5;
  let num2 = 10;
  let result = processAddition(num1, num2);
  console.log("Final Result:", result);
}

function processAddition(a, b) {
  let validA = checkNumber(a);
  let validB = checkNumber(b);
  return validA + validB;
}

function checkNumber(n) {
  if (typeof n !== "number") {
    console.error("Invalid input:", n);
    return 0;
  }
  return n;
}
start();
