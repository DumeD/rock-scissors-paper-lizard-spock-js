var computerChoice = 0;
var userName;

var userWins = 0;
var computerWins = 0;
document.getElementById("userPoints").innerHTML = "User: "+userWins+" ";
document.getElementById("compPoints").innerHTML = " Computer: "+computerWins;

function pickName() {
  userName = document.getElementById("myName").value;
  if (userName == null || userName == "") {userName = "User";}
  }

function defineComputerChoice() {
  computerChoice = Math.floor((Math.random() * 5) + 1);
  switch (computerChoice) {
    case 1: computerChoice = "rock"; break;
    case 2: computerChoice = "scissors"; break;
    case 3: computerChoice = "paper"; break;
    case 4: computerChoice = "lizard"; break;
    case 5: computerChoice = "spock"; break;
    default: break;
  }
  document.getElementById("compChoice").innerHTML = computerChoice;
}


function rock() {
  defineComputerChoice();
  if (computerChoice == "rock") {
    document.getElementById("result").innerHTML = "It's a draw!";
  } else if (computerChoice == "paper") {
    document.getElementById("result").innerHTML = "Computer Wins!";
    computerWins++;
  }else if (computerChoice == "scissors") {
    document.getElementById("result").innerHTML = userName + " Wins!";
    userWins++;
  }else if (computerChoice == "lizard") {
    document.getElementById("result").innerHTML = "Computer Wins!";
    computerWins++;
  }else {
    document.getElementById("result").innerHTML = userName + " Wins!";
    userWins++;
  }
  setPoints();

}

function scissors() {
  defineComputerChoice();
  if (computerChoice == "rock") {
    document.getElementById("result").innerHTML = "Computer Wins!";
    computerWins++;
  } else if (computerChoice == "paper") {
    document.getElementById("result").innerHTML = userName + " Wins!";
    userWins++;
  }else if (computerChoice == "scissors") {
    document.getElementById("result").innerHTML = "It's a draw!";
  }else if (computerChoice == "lizard") {
    document.getElementById("result").innerHTML = "Computer Wins!";
    computerWins++;
  }else {
    document.getElementById("result").innerHTML = userName + " Wins!";
    userWins++;
  }
  setPoints();

}

function paper() {
  defineComputerChoice();
  if (computerChoice == "rock") {
    document.getElementById("result").innerHTML = "Computer Wins!";
    computerWins++;
  } else if (computerChoice == "paper") {
    document.getElementById("result").innerHTML = "It's a draw!";
  }else if (computerChoice == "scissors") {
    document.getElementById("result").innerHTML = "Computer Wins!";
    computerWins++;
  }else if (computerChoice == "lizard") {
    document.getElementById("result").innerHTML = "Computer Wins!";
    computerWins++;
  }else {
    document.getElementById("result").innerHTML = userName + " Wins!";
    userWins++;
  }
  setPoints();

}

function lizard() {
  defineComputerChoice();
  if (computerChoice == "rock") {
    document.getElementById("result").innerHTML = "Computer Wins!";
    computerWins++;
  } else if (computerChoice == "paper") {
    document.getElementById("result").innerHTML = userName + " Wins!";
    userWins++;
  }else if (computerChoice == "scissors") {
    document.getElementById("result").innerHTML = userName + " Wins!";
    userWins++;
  }else if (computerChoice == "lizard") {
    document.getElementById("result").innerHTML = "It's a draw!";
  }else {
    document.getElementById("result").innerHTML = userName + " Wins!";
    userWins++;
  }
  setPoints();

}

function spock() {
  defineComputerChoice();
  switch (computerChoice) {
    case "rock":
      document.getElementById("result").innerHTML = userName + " Wins!";
      userWins++;
      break;
    case "scissors":
      document.getElementById("result").innerHTML = userName + " Wins!";
      userWins++;
      break;
    case "paper":
      document.getElementById("result").innerHTML = "Computer Wins!";
      computerWins++;
      break;
    case "lizard":
      document.getElementById("result").innerHTML = "Computer Wins!";
      computerWins++;
      break;
    case "spock":
      document.getElementById("result").innerHTML = "It's a draw!";
      break;
    default: break;
  }
  setPoints();
}

function setPoints(){
  if (userName == "" || userName == null) {
    document.getElementById("userPoints").innerHTML = "User: "+userWins+" ";
  }else {
      document.getElementById("userPoints").innerHTML = userName+" : "+userWins+" ";
  }
  document.getElementById("compPoints").innerHTML = " Computer: "+computerWins;
}
