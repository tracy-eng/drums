
//this is a var created to represent the number of buttons (.length) to use for our loop
var numbOfButtons = document.querySelectorAll(".drum").length;
//This is a loop created so we don't have to repeat all the different buttons in code
//Using "querySelectorAll" we can just target the class with "drum" in it so that we don't repeat
//this loop with any other buttons or functions on the page
for (var i = 0; i<numbOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    //The "evenListener" above is qued by the user and is queing a click of the mouse.

var buttonInnerHTML = this.innerHTML;
///"switch" is similar to "if" in that here it is determining which case and sound to play
//in that "case"

makeSound(buttonInnerHTML);// this passes in the switch from the "keydown" function below
buttonAnimation(buttonInnerHTML);
  });
}

///THE ABOVE IS ALL ABOUT DETECTING BUTTON PRESS WHILE BELOW IS ABOUT
//DETECTING KEYBOARD PRESSES



document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});



function makeSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;

    case "d":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

    case "j":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;

    case "k":
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;

    case "l":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

    default: console.log(buttonInnerHTML);

  }
}


//Below is the button animation. 
function buttonAnimation(currentKey) {

var activeButton = document.querySelector("." + currentKey);
//below is a "classList that calls the class pressed"
activeButton.classList.add("pressed");
//below is the delay to remove that pressed class so it appears as animation
setTimeout(function() {
  activeButton.classList.remove("pressed");
}, 100);

}
