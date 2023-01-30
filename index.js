var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";//dice 1 png to 6 png
 var randomImageSource ="images/" + randomDiceImage;//image dice1 to 6 png
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImagesrc1 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImagesrc1);
if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🎌player 1 wins:";

} else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML= "🎌player 2 wins:";
}

else{
  document.querySelector("h1").innerHTML="Draw!!";
}
