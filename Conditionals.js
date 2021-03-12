var userChoice
var randomNumber
var computerChoice

userChoice = window.prompt("heads or tails")

randomNumber = Math.random();
if (randomNumber < 0.5)
    randomNumber = 0
else
    randomNumber = 1

if (randomNumber == 0)
    computerChoice = "heads"
else
    computerChoice = "tails"

if (userChoice == computerChoice)
    alert ("You guessed right! The coin flip landed on " + userChoice)
else
    alert ("Sorry, the coin flip landed on " + computerChoice)

var birthYear
 birthYear = window.prompt("What year were you born?") 
const currentyear = 2021
if (currentyear - birthYear > 21)
    alert ("You are old enough to drink in the US.")
else if (currentyear - birthYear == 21)
    alert ("You are old enough to drink in the US...barely")
else 
    alert("Sorry, you are not old enough to drink in the US")