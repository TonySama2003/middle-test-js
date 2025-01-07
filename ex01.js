function printChristmasTree(n, character) {
  
  if (n % 1 === 0 && n < 100) {
    console.log(character)
  } else {
    console.log("Invalid") ;
  }
  let total = 0;
  for (i = 1; i <= n; i = i++) {
    total += character * (2n - 1);
  }
  console.log(total);
}
console.log(printChristmasTree(5, "o"));
