// Made an else if statement that checked the operator sign. 
// Depending on what the operator sign was it did the arithmetic based on it. 
function arithmetic(a, b, operator){
    if (operator === "add") { // If operator is equal to "add" in both value and type then its adds a + b.
      return a + b
    } else if(operator === "subtract") {
      return a - b
    } else if (operator === "multiply") {
      return a * b
    } else if (operator === "divide") {
      return a / b
    }
  }