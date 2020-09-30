const hand = document.querySelector(".hand");

// hand.style.transform = `rotate(90deg)`; // example of how to rotate the hand


//function to move hand 6 degrees
//set interval to move hand 1000ms
let handSecondCount = 0;

function secondHand() {
    handSecondCount = sec ;
    hand.style.transform = 'rotate(' + handSecondCount + 'deg)';
};

setInterval(secondHand, 1000);
  

var d = new Date();
var sec = d.getSeconds();
var min =  d.getMinutes();
//var n = d.getMilliseconds()

console.log(d)