
/* when you take things from css like background-color you dont use dash uou use camel cases */

// function changeBallColorClick () {
//   document.getElementById("ball").style.backgroundColor = "teal"
// }

// changeBallColorClick()
// function changeBallSizeClick () {
//   document.getElementById("ball").style.height = "250px";
//   document.getElementById("ball").style.weight = "250px";
// }

// changeBallSizeClick();

// console.log("changeBallSizeClick");

// function changeBallWithMouse() {
//   document.getElementById("ball").style.height = "250px";
//   document.getElementById("ball").style.weight = "250px";
// }
function makeBallBig(){
  document.getElementById("ball").style.height = "200%";
  document.getElementById("ball").style.weight = "200%";
}

function makeBallSmall(){
  document.getElementById("ball").style.height = "50%";
  document.getElementById("ball").style.weight = "50%";
}

var marginValue = 0
var selectedElement = document.getElementById("ball")


function moveBallDiagonally() {
  // setInterval takes two arguments: setInterval(argument1, argument2) {}
  // Argument 1 is the thing that we do - the function that runs
  // Argument 2 is the duration of the interval in milliseconds

  setInterval(function() {
    // console.log("Moving zball");
    marginValue++;
    selectedElement.style.left = marginValue + "px";
    selectedElement.style.top = marginValue + "px";
    // console.log("Moved zball");
  }, 50);
}
moveBallDiagonally()

// Once the ball reaches the particular point on the screen, marginValue starts decressing in another direction/ the notation for a decriment is ( --) for example marginValue-- 
// value call Window.innerHight window.ineerWidth propertyin JavaScript . We need the proper notation
// ----> window.innerWidth and window.innerHeight are the proper way to write setInterval(function () {
// we also need an If statment in order for the function to know what to do
