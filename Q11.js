function printMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
      let result = number * i;
      console.log(`${i} * ${number} = ${result}`)
    }
  }
console.log("Expected Output:")
  printMultiplicationTable(3)
  