// Code your solution in this file!
const drivers = ['Antonia','Nuru','Amari', 'Mo'];

function returnFirstTwoDrivers(drivers){
   return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers){
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
   return function fareMultiplier(fare){
        return fare * multiplier;
   }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
 
console.log(fareDoubler(10));
console.log(fareTripler(12));

const selectDifferentDrivers = function(drivers,driverFunction){
    return driverFunction(drivers);
}




