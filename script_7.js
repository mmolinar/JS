function select_answer(select){
  switch (select) {
      case "up":
        console.log("Pwa, calme-toi...");
        break;
      case "":
        console.log("t'es en PLS ?");
        break;
      case "?":
        console.log("Ouais Ouais...");
        break;
      case "fortnite":
        console.log("on s' fait une partie soum-soum ?");
        break;
      default:
        console.log("balek");
        break;
    }
}

function main(){
  let answer;
  while (true)
  {
      answer = prompt("");
      if (answer.search("Fortnite") != '-1')
      {
          select_answer("fortnite");
      }
      else if (answer.slice(answer.length - 1) == "?")
      {
          select_answer("?");
      }
      else if (answer == "")
      {
          select_answer("");
      }
      else if (answer == answer.toUpperCase())
      {
          select_answer("up");
      }
      else
      {
          select_answer(answer);
      }
  }
}

main();