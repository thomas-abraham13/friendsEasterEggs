const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question("Which Friend would you like to execute the script for? \n\n1. Joey\n2. Chandler\n3. Ross\n4. Rachel\n5. Monica\n6. Phoebe \n\nFriend (1-6) : ", (ans) => {
  // console.log(`\nFriend Chosen : ${ans}`);
  switch (ans) {
    case '1':
      text = "\nFriend Chosen: Joey";
      break;
    case '2':
      text = "\nFriend Chosen: Chandler";
      break;
    case '3':
      text = "\nFriend Chosen: Ross";
      break;
    case '4':
      text = "\nFriend Chosen: Rachel";
      break;
    case '5':
      text = "\nFriend Chosen: Monica";
      break;
    case '6':
      text = "\nFriend Chosen: Phoebe";
      break;
    default:
      text = "\nInvalid Option Selected";
  } 
  console.log(text)

  rl.close();
});
