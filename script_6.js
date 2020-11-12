function concat(result, letter){
  switch (letter) {
      case 'UCU':
      case 'UCC':
      case 'UCA':
      case 'UCG':
      case 'AGU':
      case 'AGC':
          result += "Sérine";
      break;
      case 'CCU':
      case 'CCC':
      case 'CCA':
      case 'CCG':
          result += "Proline";
      break;
      case 'UUA':
      case 'UUG':
          result += "Leucine";
      break;
      case 'UUU':
      case 'UUC':
          result += "Phénylalanine";
      break;
      case 'CGU':
      case 'CGC':
      case 'CGA':
      case 'CGG':
      case 'AGA':
      case 'AGG':
          result += "Arginine";
      break;
      default:
          result += "Tyrosine";
      break;
    }
    result += ' ';
    return result;
}

function slip_and_concat(line){
  let result = "";

  while (line)
  {
      let letter = line.slice(0,3);
      line = line.slice(3);
      result = concat(result, letter);
  }
  console.log(result);
}

slip_and_concat(prompt("ARN:"));
