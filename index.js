// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    let distance = someValue - 42; 
    return Math.abs(distance);
}

const scuberHq = 42;

function distanceFromHqInBlocks(someValue) {
    let distance = someValue - 42; 
    return Math.abs(distance);
}
function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination) {
    let blockDistance = start -destination;
    if (blockDistance < 0) {
        blockDistance = blockDistance * - 1;
    }
    return blockDistance * 264;
}

let fare;

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start - destination); 
    
if (distanceTravelledInFeet(start, destination) <= 400) {
    return fare = 0;
} else if (distanceTravelledInFeet(start, destination) < 2000 - 400) {
    return fare = 2.56;
} else if (distanceTravelledInFeet(start, destination) < 2500 ) {
    return fare = 25;
} else (distanceTravelledInFeet(start, destination) > 2500);
    return "cannot travel that far";
}

