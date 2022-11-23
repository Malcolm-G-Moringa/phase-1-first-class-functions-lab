// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    let newDrivers = drivers.slice(0,2);
    return newDrivers;
}

const returnLastTwoDrivers = function(drivers){
    let newDrivers = drivers.slice(-2);
    return newDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(value){
    return ((fare) => (fare*value));
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, callback){
    return callback(arrayOfDrivers);
}