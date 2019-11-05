var hasGameStarted = false;

var letterList=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "BONUS"]

var finalLetter = "owo"
var tempLetter = "uwu"
var input = document.getElementById("InputAnswer")
var score = 0

function startGame(){
  hasGameStarted = true
  randomLetter()
  input.focus()
};

function randomLetter(){
  tempLetter = Math.floor(Math.random()*26)
  console.log("tempLetter = "+tempLetter)
  finalLetter = letterList[tempLetter]
  document.getElementById('owoLetter').innerHTML = finalLetter
}

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    document.getElementById("validButton").click()
  }
})

function valid(){
  if (input.value == "BONUS" && finalLetter == "BONUS"){
    score = score + 450;
    document.getElementById("scoreDisplay").innerHTML = "Score : "+score
    input.value = ""
    input.focus()
    randomLetter()
  }
  if (input.value == finalLetter){
    score = score + 50
    document.getElementById("scoreDisplay").innerHTML = "Score : "+score
    input.value =""
    input.focus()
    randomLetter()
  }
}
