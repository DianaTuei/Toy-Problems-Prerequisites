// Create a function to check speed limit using the speed
function checkSpeedLimit(speed){
    // creates variables for speedLimit,demerit points given after 5km over a certain speed limit and the point where one gets suspended
    const speedLimit = 70;
    const suspensionMark = 12;

    // set a consition to determine whether speed one is driving at is greater than speedlimit set.
    if (speed <= speedLimit){
        console.log("OK");
    } else {
        // calculates demerit points
        const demeritPoints = Math.floor((speed - speedLimit) / 5);
        console.log(`Points: ${demeritPoints}`);
        // defines the point where a drivers license gets suspended
        if (demeritPoints > suspensionMark){
            console.log("License Suspended");
        }
    }
}

const speedOfCar = 150;
checkSpeedLimit(speedOfCar);