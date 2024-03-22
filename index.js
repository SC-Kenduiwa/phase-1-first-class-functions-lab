const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}
/*console.log(returnFirstTwoDrivers(['Antonia', 'Nuru','Amari','Mo']));*/
//function to return last two drivers
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};
//selecting drivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
//higher-order function to create a fare multiplier
const createFareMultiplier = function(integer) {
    return function(fare) {
        return fare *integer;
    };
};
//function to double the fare
const fareDoubler =createFareMultiplier(2);

//function to tripple the fare 
const fareTripler =createFareMultiplier(3);

//function to select different drivers based on thr provided function

const selectDifferentDrivers = function(drivers, selectingDrivers) {
    return selectingDrivers(drivers);
};
//Test cases 
console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));
console.log(fareDoubler(10));//output: 20
console.log(fareTripler(10));//output: 30
console.log(selctingDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'],returnFirstTwoDrivers));
console.log(selctingDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'],returnLastTwoDrivers));

