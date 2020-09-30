const hand = document.querySelector(".hand");

// hand.style.transform = `rotate(90deg)`; // example of how to rotate the hand


//function to move hand 6 degrees
//set interval to move hand 1000ms
let handSecondCount = 0;

function secondHand() {
    handSecondCount = handSecondCount + 6;
    hand.style.transform = 'rotate(' + handSecondCount + 'deg)';
};

setInterval(secondHand, 1000);
