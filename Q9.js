function double(number) {
    return number * 2
  }
  
  function square(number) {
    return number ** 2
  }
   function doubleSquare(number) {
    let doubled = double(number) 
    let squared = square(doubled)
    return squared
  }
  
  let result = doubleSquare(3)
  console.log("Output:", result)   