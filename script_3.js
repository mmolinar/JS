let answer = prompt("Give me a number please.")
function pyramid() {
  let totalNumberofRows = answer;
  let output = '';
  for (let i = 1; i <= totalNumberofRows; i++) {
      output = ""
      for(let space = 1; space <= totalNumberofRows - i; space++){
        output += " ";
      }
      for (let j = 1; j <= i; j++) {
          output += '#';
      }
      console.log(output);
      output = '';
  }
}

console.log(pyramid(Number(answer)));