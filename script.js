document.getElementById("button").addEventListener("click", randomizer)
let randomNumber = 0
let guess = 0
function randomizer(){
  guess = document.getElementById("input").value
  guess = parseInt(guess)

  randomNumber = Math.random() * 6 + 1
  randomNumber = parseInt( randomNumber)

  if (guess == randomNumber) {
    document.getElementById("answer").innerHTML = "good job you're are winner"
  }
  else {
    document.getElementById("answer").innerHTML = "sorry :( not correct"
  }
}