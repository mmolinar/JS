let answer = prompt("De quel nombre veux-tu calculer la factorielle ?")

function factorialize(num) {
  let result = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result *= num;
  }
  return result;
}
console.log(factorialize(Number(answer)));
