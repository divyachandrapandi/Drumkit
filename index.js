// adding Event Listener to butttons called click
// 1. selecting button to be clicked or pressed
var drum_button = document.querySelectorAll(".drum");

// looping through all button with the length attribute, and add
// ! addEventListener for "click"
// 2 addEventListener for "keydown"

for (var i = 0; i < drum_button.length; i++) {

  drum_button[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
    buttonAnimation(buttonInnerHTML);
    makeSound(buttonInnerHTML);  // if innerhtlm matches the drum button, then make sound
  });

  document.addEventListener('keydown', function(){
    buttonAnimation(event.key);
    makeSound(event.key);  // if key pressed matches drum button, then make sound
  });
}

// button animation
// to set pressed styling in styles.css by using classList add method
// after time interval of 100ms remove that styling css using setTimeout
function buttonAnimation(key){
    var activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed")}, 200);
}



// makeSound is a function that takes key that is either pressed or clicked as parameter
// switch statement is used to assign audio for each button
// new audio is created usinf Audio constructor function and use play() method
function makeSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "k":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    case "l":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    default:
      console.log(key);
  }
}
//
// var audio = new Audio('sounds/tom-3.mp3');
// audio.play();
// add background for butttons
// drum_bg = ["crash.png", "kick.png", "snare.png","tom1.png","tom2.png","tom3.png","tom4.png"]
// for (var j =0; j<drum_bg.length; j++){
//
// drum_button[j].style.backgroundImage = `url('./images/${drum_bg[j]}')`;
// }
